import React, { useState, useRef, useEffect } from 'react'
import { Button, Skeleton } from 'victusfinance'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useHarvest } from 'hooks/useHarvest'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { usePriceCakeBusd } from 'state/hooks'
import { useCountUp } from 'react-countup'
import useStake from '../../../../../hooks/useStake'

import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles'

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, userData, userDataReady }) => {
  const earningsBigNumber = new BigNumber(userData.earnings)
  const lydPrice = usePriceCakeBusd()
  let earnings = 0
  let earningsUsdt = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceNumber(earningsBigNumber)
    earningsUsdt = new BigNumber(earnings).multipliedBy(lydPrice).toNumber()
    displayBalance = earnings.toLocaleString()
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)
  const { t } = useTranslation()

  const { countUp, update } = useCountUp({
    start: 0,
    end: earningsUsdt,
    duration: 1,
    separator: ',',
    decimals: 2,
  })
  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(earningsUsdt)
  }, [earningsUsdt, updateValue])

  return (
    <ActionContainer>
      <ActionTitles>
        <Title>MORPH </Title>
        <Subtle>{t('EARNED')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {countUp > 0 && <Staked>~{countUp}USD</Staked>}
        </div>
        <BalanceAndCompound>
        {pid === 5 ?
        // {false ?
          <Button
            disabled={earnings === 0 || pendingTx}
            // scale='sm'
            variant='tertiary'
            ml="4px"
            onClick={async () => {
              setPendingTx(true)
              await onStake(earnings.toString(), 18)
              setPendingTx(false)
            }}
          >
            {t('Compound')}
          </Button>
          : null}
        <Button
          disabled={!earnings || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
          ml="4px"
        >
          {t('Harvest')}
        </Button>
        </BalanceAndCompound>
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
