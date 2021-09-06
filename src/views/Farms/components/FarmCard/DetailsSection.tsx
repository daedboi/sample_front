import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from 'victusfinance'

export interface ExpandableSectionProps {
  cChainExplorer?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
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

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  cChainExplorer,
  // infoAddress,
  removed,
  totalValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t('Total Liquidity')}:</Text>
        <Text>{totalValueFormatted}</Text>
      </Flex>
      {!removed && (
        <StyledLinkExternal color='secondary' href={addLiquidityUrl}>{t(`Get ${lpLabel}`, { name: lpLabel })}</StyledLinkExternal>
      )}
      <StyledLinkExternal color='secondary' href={cChainExplorer}>{t('View Contract')}</StyledLinkExternal>
      {/* <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal> */}
    </Wrapper>
  )
}

export default DetailsSection
