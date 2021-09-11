import React from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LinkExternal, Text } from 'trinityhelper'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { CommunityTag, CoreTag, DualTag, NoFeeTag } from 'components/Tags'

import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
  depositFee?: number
  stakedUsd?: BigNumber
}


const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apr,
  multiplier,
  liquidity,
  userDataReady,
  expanded,
  depositFee,
  stakedUsd
}) => {
  const farm = details

  const { t } = useTranslation()
  const isActive = farm.multiplier !== '0X'
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('MORPHEUS', '')
  // const liquidityUrlPathParts = getLiquidityUrlPathParts({
  //   quoteTokenAddress: quoteToken.address,
  //   tokenAddress: token.address,
  // })
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  
  let liquidityUrlPathParts: string;
  let addLiquidityUrl: string;
  if (farm.isTokenOnly) {
    liquidityUrlPathParts = token.address[process.env.REACT_APP_CHAIN_ID]
    addLiquidityUrl = `https://info.spookyswap.finance/token/${liquidityUrlPathParts}`
  }else{
    liquidityUrlPathParts = getLiquidityUrlPathParts({
      quoteTokenAddress: quoteToken.address,
      tokenAddress: token.address,
    })    
    addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }  

  let avaxExplorer: string;
  if (farm.isTokenOnly) {
    avaxExplorer = `https://ftmscan.com/address/${farm.token.address[process.env.REACT_APP_CHAIN_ID]}`
  }else{
    avaxExplorer = `https://ftmscan.com/address/${lpAddress}`
  }
  // const info = `https://info.quickswap.exchange/pair/${lpAddress}`
  // const isCommunityFarm = communityFarms.includes(token.symbol)

  return (
    <Container expanded={expanded}>
      <InfoContainer>
        {isActive && (
          <StakeContainer>
            <StyledLinkExternal href={addLiquidityUrl}>
              {t(`Get ${lpLabel}`, { name: lpLabel })}
            </StyledLinkExternal>
          </StakeContainer>
        )}
        <StyledLinkExternal href={avaxExplorer}>{t('View Contract')}</StyledLinkExternal>
        {/* <StyledLinkExternal href={info}>{t('See Pair Info')}</StyledLinkExternal> */}
        <TagsContainer>
          {depositFee === 0 ? <NoFeeTag /> : null}
          {farm.isCommunity ? <CommunityTag /> : <CoreTag />}
          {dual ? <DualTag /> : null}
        </TagsContainer>
      </InfoContainer>
      <ValueContainer>
        <ValueWrapper>
          <Text>{t('APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Multiplier')}</Text>
          <Multiplier {...multiplier} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{t('Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
        <HarvestAction {...farm} userDataReady={userDataReady} />
        <StakedAction {...farm} userDataReady={userDataReady} stakedUsd={stakedUsd} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
