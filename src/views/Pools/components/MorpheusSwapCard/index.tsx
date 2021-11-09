import BigNumber from 'bignumber.js'
import React, { useState, useEffect, useCallback } from 'react'
import { CardBody, Flex, Text, Heading } from 'trinityhelper'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd, useSwapper } from 'state/hooks'
import styled from 'styled-components'
import { startTimeStamp } from 'config/constants'
import StyledCard from './StyledCard'
import StyledCardHeader from './StyledCardHeader'
import CardActions from './CardActions'


const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CardInfo = styled.div`
  display: flex;

  .w-50 {
    width: 50%
  }
`

const MorpheusSwapCard: React.FC<{ account: string; isHomeCard?: boolean }> = ({ account }) => {
  const swapperInfo = useSwapper(account)
  const { t } = useTranslation()
  const morphBalance = new BigNumber(swapperInfo.morphBalance)
  const allowance = new BigNumber(swapperInfo.allowance)
  const stakingTokenPrice = usePriceCakeBusd().toNumber()

  const getDisplayDateNumbers = (min: number) => {
    return { d: Math.trunc(min / (60 * 24)), h: Math.trunc(min / 60 % 24), m: Math.trunc(min % 60) }
  }

  const getTimeLeftToNextRebase = useCallback((startTimestamp: number) => {
    const currentTimeStampe = Math.round(new Date().getTime() / 1000)
    const minDifference = (currentTimeStampe - startTimestamp) / 60
    const _5daysMins = 60 * 24 * 5
    const _30daysMins = 60 * 24 * 30
    if (minDifference > _5daysMins) {
      return getDisplayDateNumbers(_30daysMins - (minDifference - _5daysMins) % (_30daysMins))
    }
    return getDisplayDateNumbers(_5daysMins - minDifference)
  }, [])

  const [leftDaysInfo, setleftDaysInfo] = useState(getTimeLeftToNextRebase(startTimeStamp))

  useEffect(() => {
    setTimeout(() => {
      setleftDaysInfo(getTimeLeftToNextRebase(startTimeStamp))
    }, 60000);
  }, [leftDaysInfo, getTimeLeftToNextRebase]);

  return (
    <StyledCard>
      <StyledCardHeader
        earningTokenSymbol="PILLS"
        stakingTokenSymbol="MORPH"
      />
      <CardBody>
        <CardInfo>
          <Heading scale="md" color="text" className="w-50" mr="20px">
            {t('Swap MORPH here and receive PILLS as per the current swap ratio. This swapper automatically burns MORPH and mints PILLS, which are required in order to stake in the Neo Pools. ')}
            <br />
            <br />
            {t('This ratio will increase over time, once every thirty days.')}
          </Heading>
          <Flex flexDirection="column" className="w-50">
            <Row>
              <Text fontSize="14px">{t('Ratio')}</Text>
              <Text fontSize="14px">{t(`1 PILLS = ${ parseFloat(swapperInfo.ratio) / 100 } MORPH`)}</Text>
            </Row>
            <Row>
              <Text fontSize="14px">{t(`${leftDaysInfo.d === 0 ? '' : leftDaysInfo.d.toString().concat(' Days,')} ${leftDaysInfo.h === 0 ? '' : leftDaysInfo.h.toString().concat(' Hours,')} ${leftDaysInfo.m} Mins to Next Ratio Change`)}</Text>
            </Row>
            <Flex mt="24px" flexDirection="column">
              {account ? (
                <CardActions
                  maxBalance={morphBalance}
                  allowance={allowance}
                  stakingTokenPrice={stakingTokenPrice}
                />
              ) : (
                <>
                  <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                    {t('Start swap')}
                  </Text>
                  <UnlockButton />
                </>
              )}
            </Flex>
          </Flex>
        </CardInfo>
      </CardBody>
    </StyledCard>
  )
}

export default MorpheusSwapCard
