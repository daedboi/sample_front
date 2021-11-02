import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { BIG_TEN } from 'utils/bigNumber'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'
// import { DEFAULT_TOKEN_DECIMAL } from 'config'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async (farmsToFetch: FarmConfig[]) => {
  const data = await Promise.all(
    farmsToFetch.map(async (farmConfig) => {
      const lpAddress = getAddress(farmConfig.lpAddresses)
      const calls = [
        // Balance of token in the LP contract
        {
          address: getAddress(farmConfig.token.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of quote token on LP contract
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'balanceOf',
          params: [lpAddress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.isTokenOnly ? farmConfig.token.address[CHAIN_ID] : lpAddress,
          name: 'balanceOf',
          params: [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAddress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: getAddress(farmConfig.token.address),
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: getAddress(farmConfig.quoteToken.address),
          name: 'decimals',
        },
      ]

      const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
        await multicall(erc20, calls)

      let tokenAmount;
      let lpTotalInQuoteToken;
      let lpStakedTotal;
      let tokenPriceVsQuote;

      if (farmConfig.isTokenOnly) {
        tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals));

        if (farmConfig.tokenSymbol === 'USDC' && farmConfig.quoteTokenSymbol === 'USDC') {
          tokenPriceVsQuote = new BigNumber(1);
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBalanceLP).div(new BigNumber(10).pow(quoteTokenDecimals)).div(new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)));
        }

        lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote);

        lpStakedTotal = tokenAmount;
      } else {
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

        // Total value in staking in quote token value
        lpTotalInQuoteToken = new BigNumber(quoteTokenBalanceLP)
          .div(BIG_TEN.pow(quoteTokenDecimals))
          .times(new BigNumber(2))
          .times(lpTokenRatio)

        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        tokenAmount = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBalanceLP)
          .div(BIG_TEN.pow(quoteTokenDecimals))
          .times(lpTokenRatio)

        if (tokenAmount.comparedTo(0) > 0) {
          tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount);
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBalanceLP).div(new BigNumber(tokenBalanceLP)).times(new BigNumber(10).pow(tokenDecimals - quoteTokenDecimals));
        }
        lpStakedTotal = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(quoteTokenDecimals))

      }
      const [info, totalAllocPoint, morphPerSec] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
        {
          address: getMasterChefAddress(),
          name: 'morphPerSec',
        },
      ])

      const allocPoint = new BigNumber(info.allocPoint._hex)
      let poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))
      if (tokenPriceVsQuote === undefined) {
        console.error(`Could not get token price for pool ${farmConfig.pid} ${farmConfig.lpSymbol}`)
        tokenPriceVsQuote = new BigNumber("0");
        poolWeight = new BigNumber(0)
      }
      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        // quoteTokenAmount: quoteTokenAmount.toJSON(),
        lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toJSON(),
        lpTokenBalanceMC: new BigNumber(lpTokenBalanceMC).toJSON(),
        multiplier: `${poolWeight.multipliedBy(100).toNumber().toFixed(2)}%`,
        depositFeeBP: info.depositFeeBP,
        lpStakedTotal: lpStakedTotal.toJSON(),
        morphPerSec: new BigNumber(morphPerSec).toNumber(),
      }
    }),
  )
  return data
}

export default fetchFarms
