import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from 'trinityhelper'
import { Farm } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
// import { BASE_ADD_LIQUIDITY_URL } from 'config'
// import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { QuoteToken } from 'config/constants/types'
import { CalculateApyNeoPools } from 'utils/compoundApyHelpers'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'


export interface FarmWithStakedValue extends Farm {
  apr?: BigNumber
  liquidity?: BigNumber
}

// const chainId = process.env.REACT_APP_CHAIN_ID
const BASE_TOKEN_LIQUIDITY_URL = `https://swap.morpheusswap.app`

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`


const StyledCardAccent = styled.div`
background: linear-gradient(45deg,
  rgba(94,218,106, 1) 0%,
  rgba(38, 98, 71, 1) 10%,
  rgba(47, 255, 54, 1) 20%,
  rgba(98, 181, 35, 1) 30%,
  rgba(166, 204, 27, 1) 40%,
  rgba(233, 245, 0, 1) 50%,
  rgba(242, 227, 10, 1) 60%,
  rgba(227, 242, 10, 1) 70%,
  rgba(176, 243, 7, 1) 80%,
  rgba(118, 248, 4, 1) 90%,
  rgba(61, 248, 4, 1) 100%);
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 4px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: linear-gradient(to top, ${(props) => props.theme.card.background.concat("C8")}, ${(props) => props.theme.card.background.concat("FF")});
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  lydPrice?: BigNumber
  wavaxPrice?: BigNumber
  wethPrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, lydPrice, account, wavaxPrice, wethPrice }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  let farmImage: string;
  if (farm.isTokenOnly) {
    farmImage = farm.token.symbol.toLowerCase()
  } else if (farm.token.symbol === 'FTM') {
    farmImage = `${farm.quoteToken.symbol.toLowerCase()}-${farm.token.symbol.toLowerCase()}`
  } else {
    farmImage = `${farm.token.symbol.toLowerCase()}-${farm.quoteToken.symbol.toLowerCase()}`
  }
  // const farmImage = farm.isTokenOnly ? farm.token.symbol.toLowerCase() : `${farm.token.symbol.toLowerCase()}-${farm.quoteToken.symbol.toLowerCase()}`

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }

    if (farm.quoteToken.symbol === QuoteToken.CAKE) {
      return lydPrice.times(farm.lpTotalInQuoteToken)
    } if (farm.quoteToken.symbol === QuoteToken.FTM) {
      return wavaxPrice.times(farm.lpTotalInQuoteToken)
    } if (farm.quoteToken.symbol === QuoteToken.WETH) {
      return wethPrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [lydPrice, wavaxPrice, wethPrice, farm.lpTotalInQuoteToken, farm.quoteToken.symbol])

  const totalValueFormatted = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  // const totalValueFormatted = farm.liquidity
  //   ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  //   : '-'

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('MORPHEUS', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : 'MORPH'

  const farmAPR = farm.apr && farm.apr.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })


  const addLiquidityUrl = `${BASE_TOKEN_LIQUIDITY_URL}`

  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]

  const apy = CalculateApyNeoPools({ baseApr: farmAPR, depostiFee: farm.depositFeeBP, days: 365 })

  return (
    <FCard>
      {(farm.token.symbol === 'MORPH' || farm.quoteToken.symbol === 'MORPH' || farm.token.symbol === 'CAKE' || farm.quoteToken.symbol === 'CAKE' || farm.token.symbol === 'ICE' || farm.token.symbol === 'SPELL' || farm.token.symbol === 'MIM') && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        isSpirit={farm.isSpirit}
        isCommunityFarm={farm.isCommunity}
        depositFee={farm.depositFeeBP}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
        isTokenOnly={farm.isTokenOnly}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{t('FARM APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apr ? (
              <>
                {/* <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} lydPrice={lydPrice} apr={farm.apr} /> */}
                {farmAPR}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{t('FARM+NEO APY')}:</Text>
          <Text bold color="#2CA6DF" style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apr ? (
              <>
                <ApyButton depositFee={farm.depositFeeBP} lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} lydPrice={lydPrice} apr={farm.apr} />
                {apy}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{t('Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text style={{ fontSize: '24px' }}>{t('Deposit Fee')}:</Text>
        <Text bold style={{ fontSize: '24px' }}>{(farm.depositFeeBP / 100)}%</Text>
      </Flex>
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} totalValue={totalValue} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          cChainExplorer={
            farm.isTokenOnly ?
              `https://ftmscan.com/address/${farm.token.address[process.env.REACT_APP_CHAIN_ID]}`
              :
              `https://ftmscan.com/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
          }
          infoAddress={`https://info.spookyswap.finance/pair/${lpAddress}`}
          totalValueFormatted={totalValueFormatted}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
