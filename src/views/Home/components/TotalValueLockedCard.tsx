import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'
// import { useGetStats } from 'hooks/api'
import { useMediaQuery } from 'react-responsive';
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)<{isMobile:boolean}>`
  justify-content:space-around;
  display: inline-block;
  flex: 1;
  width:${(props)=>props.isMobile?"100%":"200%"};
  box-shadow: none;

`
const StyledCardBody = styled(CardBody)`
  box-shadow: none;
  text-align:center
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` }); 

  return (
    <StyledTotalValueLockedCard isMobile={isMobile}>
      <StyledCardBody>
        <Heading scale="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        <>
          {/* <Heading scale="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading scale="xl"> */}
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
          {/* </Heading> */}
          <Text color="textSubtle">{t('Across all Farms and Pools')}</Text>
        </>
      </StyledCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
