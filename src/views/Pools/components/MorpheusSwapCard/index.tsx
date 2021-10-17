import BigNumber from 'bignumber.js'
import React from 'react'
import { CardBody, Flex, Text, Heading } from 'trinityhelper'
import UnlockButton from 'components/UnlockButton'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd, useSwapper } from 'state/hooks'
import styled from 'styled-components'
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
