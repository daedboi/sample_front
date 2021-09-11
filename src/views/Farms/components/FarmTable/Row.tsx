import React, { useEffect, useState, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useMatchBreakpoints } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { useFarmUser, usePriceCakeBusd, usePriceBnbBusd } from 'state/hooks'
import { QuoteToken } from 'config/constants/types'
import Apr, { AprProps } from './Apr'
import Farm, { FarmProps } from './Farm'
import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import DepositFee, { FeeProps } from './DepositFee'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  apr: AprProps
  farm: FarmProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  depositFee: FeeProps
  details: FarmWithStakedValue
  lydPrice?: BigNumber
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  farm: Farm,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
  depositFee: DepositFee,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowPropsWithLoading> = (props) => {
  const { details, userDataReady } = props
  
  const lydPrice = usePriceCakeBusd()
  const wavaxPrice = usePriceBnbBusd()

  const hasStakedAmount = !!useFarmUser(details.pid).stakedBalance.toNumber()
  const { stakedBalance } = useFarmUser(details.pid)
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const totalValue: BigNumber = useMemo(() => {
    if (details.quoteToken.symbol === QuoteToken.FTM) {
      return wavaxPrice.times(details.lpTotalInQuoteToken)
    }if (details.quoteToken.symbol === QuoteToken.CAKE) {
      return lydPrice.times(details.lpTotalInQuoteToken)
    }
    return details.lpTotalInQuoteToken
  }, [lydPrice, wavaxPrice, details.lpTotalInQuoteToken, details.quoteToken.symbol])

  let stakedUsd = stakedBalance

  if (totalValue) {
    stakedUsd = stakedUsd.times(new BigNumber(totalValue).div(details.lpStakedTotal))
  }
  
  // const totalValueFormatted = totalValue
  //   ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  //   : '-'

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('APR')}>
                        <Apr {...props.apr} hideButton={isMobile} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'liquidity':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('Liquidity')}>
                        <Liquidity liquidity={totalValue} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'depositFeeBP':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('depositFee')}>
                        <DepositFee {...props.depositFee} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t(tableSchema[columnIndex].label)}>
                        {React.createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <EarnedMobileCell>
              <CellLayout label={t('Earned')}>
                <Earned {...props.earned} userDataReady={userDataReady} />
              </CellLayout>
            </EarnedMobileCell>
            <AprMobileCell>
              <CellLayout label={t('APR')}>
                <Apr {...props.apr} hideButton />
              </CellLayout>
            </AprMobileCell>
          </tr>
        </td>
        <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellLayout>
          </CellInner>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={6}>
            <ActionPanel {...props} depositFee={details.depositFeeBP} expanded={actionPanelExpanded} stakedUsd={stakedUsd}/>
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
