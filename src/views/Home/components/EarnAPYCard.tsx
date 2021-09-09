/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from 'trinityhelper'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { QuoteToken } from 'config/constants/types'
import { useFarms, usePriceCakeBusd, usePriceBnbBusd } from 'state/hooks'
// import { getAddress } from 'utils/addressHelpers'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
  font-size: 40px;
`
const EarnAPRCard = () => {
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()
  // const prices = useGetApiPrices()
  const lydPrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd();

  const highestApr = useMemo(() => {
    const aprs = farmsLP
      // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
      .filter((farm) => farm.multiplier !== '0X')
      .filter((farm) => !farm.hide)
      .map((farm) => {
        if (farm.lpTotalInQuoteToken && farm.quoteToken.usdtPrice) {
          // const quoteSymbol = farm?.quoteToken?.symbol
          // const quoteTokenPriceUsd = prices[quoteSymbol.toLowerCase()]
          let totalLiquidity: BigNumber;
          if (farm.quoteToken.symbol === QuoteToken.FTM) {
            totalLiquidity = (bnbPrice.times(farm.lpTotalInQuoteToken));
          }else if (farm.quoteToken.symbol === QuoteToken.CAKE) {
            totalLiquidity = lydPrice.times(farm.lpTotalInQuoteToken)
          } else{
            totalLiquidity = farm.lpTotalInQuoteToken
          }
          // const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.usdcPrice)
          return getFarmApr(farm.poolWeight, lydPrice, totalLiquidity)
        }
        return null
      })

    const maxApr = max(aprs)
    return maxApr?.toLocaleString()
  }, [lydPrice, farmsLP])

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            Earn up to
          </Heading>
          <CardMidContent color="#E60C41">
            {highestApr ? `${highestApr}% ${t('APR')} 🚀` : <Skeleton animation="pulse" variant="rect" height="44px" />}
          </CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg">
              in Farms
            </Heading>
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAPRCard
