import { Currency, currencyEquals, JSBI, Price } from '@pancakeswap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import tokens, { mainnetTokens } from 'config/constants/bscTokens'
import { ChainId } from 'config/constants'
import { PairState, usePairs } from './usePairs'
import { wrappedCurrency } from '../utils/wrappedCurrency'

const USDC_MAINNET = mainnetTokens.usdc
const { wftm: WFTM } = tokens

/**
 * Returns the price in BUSD of the input currency
 * @param currency currency to compute the BUSD price of
 */
export default function useBUSDPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WFTM, wrapped) ? undefined : currency, chainId ? WFTM : undefined],
      [wrapped?.equals(USDC_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? USDC_MAINNET : undefined],
      [chainId ? WFTM : undefined, chainId === ChainId.MAINNET ? USDC_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )
  const [[ethPairState, ethPair], [busdPairState, busdPair], [busdEthPairState, busdEthPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WFTM)) {
      if (busdPair) {
        const price = busdPair.priceOf(WFTM)
        return new Price(currency, USDC_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle busd
    if (wrapped.equals(USDC_MAINNET)) {
      return new Price(USDC_MAINNET, USDC_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WFTM)
    const ethPairETHBUSDValue: JSBI =
      ethPairETHAmount && busdEthPair ? busdEthPair.priceOf(WFTM).quote(ethPairETHAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the busd pair
    if (
      busdPairState === PairState.EXISTS &&
      busdPair &&
      busdPair.reserveOf(USDC_MAINNET).greaterThan(ethPairETHBUSDValue)
    ) {
      const price = busdPair.priceOf(wrapped)
      return new Price(currency, USDC_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && busdEthPairState === PairState.EXISTS && busdEthPair) {
      if (busdEthPair.reserveOf(USDC_MAINNET).greaterThan('0') && ethPair.reserveOf(WFTM).greaterThan('0')) {
        const ethBusdPrice = busdEthPair.priceOf(USDC_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WFTM)
        const busdPrice = ethBusdPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, USDC_MAINNET, busdPrice.denominator, busdPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, busdEthPair, busdEthPairState, busdPair, busdPairState, wrapped])
}

export const useCakeBusdPrice = (): Price | undefined => {
  const cakeBusdPrice = useBUSDPrice(tokens.morph)
  return cakeBusdPrice
}

export const useBNBBusdPrice = (): Price | undefined => {
  const bnbBusdPrice = useBUSDPrice(tokens.wftm)
  return bnbBusdPrice
}
