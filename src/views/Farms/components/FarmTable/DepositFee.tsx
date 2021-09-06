import React from 'react'
import styled from 'styled-components'
// import { Text, Skeleton } from 'victusfinance'

export interface FeeProps {
  depositFeeBP: number
}

const FeeWrapper = styled.span`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

`

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `

const DepositFee: React.FunctionComponent<FeeProps> = ({ depositFeeBP }) => {
  const displayFee = `${(depositFeeBP / 100)}%`

  return (
    // <Container>
      <FeeWrapper>
        {displayFee}
      </FeeWrapper>
    // </Container>
  )
}

export default DepositFee
