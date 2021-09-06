import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from 'victusfinance'
import { useTranslation } from 'contexts/Localization'
import useStake from 'hooks/useStake'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  usdEarnings?: BigNumber
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, usdEarnings }) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const rawEarningsBalance = account ? getBalanceNumber(earnings) : 0
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}<Label>~${(usdEarnings).toFixed(2)} USD</Label></Heading>
      <BalanceAndCompound>
        {pid === 5 ?
        // {false ?
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            scale='sm'
            variant='tertiary'
            marginBottom='15px'
            onClick={async () => {
              setPendingTx(true)
              await onStake(rawEarningsBalance.toString(), 18)
              setPendingTx(false)
            }}
          >
            {t('Compound')}
          </Button>
          : null}
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
        >
          {t('Harvest')}
        </Button>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
