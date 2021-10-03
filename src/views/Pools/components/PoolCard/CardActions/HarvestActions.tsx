import React from 'react'
import { Flex, Text, Button, Heading, useModal, Skeleton } from 'trinityhelper'
import BigNumber from 'bignumber.js'
import { QuoteToken, Token } from 'config/constants/types'
// import { getAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance, getBalanceNumber, formatNumber } from 'utils/formatBalance'
import { usePriceBnbBusd, usePriceCakeBusd, usePriceQuoteToken } from 'state/hooks'
import CollectModal from '../Modals/CollectModal'

interface HarvestActionsProps {
  earnings: BigNumber
  earningToken: Token
  sousId: number
  isBnbPool: boolean
  isLoading?: boolean
  usesCakeForPrice: boolean
  correspondingFarmId: number
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  earningToken,
  sousId,
  isBnbPool,
  isLoading = false,
  usesCakeForPrice,
  correspondingFarmId,
}) => {
  const { t } = useTranslation()
  // const earningTokenPrice = useGetApiPrice(earningToken?.symbol?.toLowerCase())
  const cakePrice = usePriceCakeBusd()
  const ftmPrice = usePriceBnbBusd()
  const quoteTokenPrice = usePriceQuoteToken(correspondingFarmId)

  let earningTokenPriceBig = quoteTokenPrice.times(ftmPrice);
  if (earningToken.symbol.toUpperCase() === QuoteToken.WFTM) {
    earningTokenPriceBig = ftmPrice
  } else if (usesCakeForPrice){
    earningTokenPriceBig = quoteTokenPrice.times(cakePrice)
  } else if (earningToken.symbol.toUpperCase() === QuoteToken.SPELL) {
    earningTokenPriceBig = quoteTokenPrice
  }

  const earningTokenPrice = earningTokenPriceBig.toNumber()

  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(getBalanceNumber(earnings, earningToken.decimals), 3, 3)
  const earningsDollarValue = formatNumber(
    getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals),
  )
  const hasEarnings = earnings.toNumber() > 0
  const isCompoundPool = sousId === 0

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningsDollarValue}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  return (
    <Flex flexDirection="column" mb="16px">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column">
          {isLoading ? (
            <Skeleton width="80px" height="48px" />
          ) : (
            <>
              <Heading color={hasEarnings ? 'text' : 'textDisabled'}>{hasEarnings ? formattedBalance : 0}</Heading>
              <Text fontSize="12px" color={hasEarnings ? 'textSubtle' : 'textDisabled'}>
                {`~${hasEarnings ? earningsDollarValue : 0} USD`}
              </Text>
            </>
          )}
        </Flex>
        <Flex>
          <Button disabled={!hasEarnings} onClick={onPresentCollect}>
            {isCompoundPool ? t('Collect') : t('Harvest')}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HarvestActions
