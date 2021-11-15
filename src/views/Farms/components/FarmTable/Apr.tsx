import React from 'react'
import styled from 'styled-components'
import ApyButton from 'views/Farms/components/FarmCard/ApyButton'
import { Address } from 'config/constants/types'
import BigNumber from 'bignumber.js'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { useTranslation } from 'contexts/Localization'
import { calculateApyNeoPools } from 'utils/compoundApyHelpers'
import { ProposalIcon } from 'trinityhelper'
import DepositFee from './DepositFee'

export interface AprProps {
  value: string
  multiplier: string
  lpLabel: string
  tokenAddress?: Address
  quoteTokenAddress?: Address
  lydPrice: BigNumber
  originalValue: number
  hideButton?: boolean
  depositFee?: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Apr: React.FC<AprProps> = ({
  value,
  lpLabel,
  tokenAddress,
  quoteTokenAddress,
  lydPrice,
  originalValue,
  hideButton = false,
  depositFee,
}) => {
  const { t } = useTranslation()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAddress, tokenAddress })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const apy = calculateApyNeoPools({ baseApr: value, depostiFee: depositFee })

  return originalValue !== 0 ? (
    <Container>
      {originalValue ? (
        <>
          <AprWrapper>{apy}%</AprWrapper>
          {!hideButton && (
            <ApyButton lpLabel={lpLabel} lydPrice={lydPrice} apr={new BigNumber(originalValue)} addLiquidityUrl={addLiquidityUrl} />
          )}
        </>
      ) : (
        <AprWrapper>{t('Loading...')}</AprWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <AprWrapper>{originalValue}%</AprWrapper>
    </Container>
  )
}

export default Apr
