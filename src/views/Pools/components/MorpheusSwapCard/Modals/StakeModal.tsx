import React, { useState } from 'react'
import { Modal, Text, Flex, Button, BalanceInput, AutoRenewIcon } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'
import { useSwapMorph } from 'hooks/useStake'
import useTheme from 'hooks/useTheme'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import { getFullDisplayBalance, formatNumber, getDecimalAmount } from 'utils/formatBalance'
import PercentageButton from './PercentageButton'

interface StakeModalProps {
  maxBalance: BigNumber
  stakingTokenPrice: number
  isRemovingStake?: boolean
  onDismiss?: () => void
}

const StakeModal: React.FC<StakeModalProps> = ({
  maxBalance,
  stakingTokenPrice,
  isRemovingStake = false,
  onDismiss,
}) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { onSwapMorph } = useSwapMorph()
  const { toastSuccess, toastError } = useToast()

  const [pendingTx, setPendingTx] = useState(false)
  const [stakeAmount, setStakeAmount] = useState('')
  // eslint-disable-next-line
  const [percent, setPercent] = useState(0)

  const usdValueStaked = stakeAmount && formatNumber(new BigNumber(stakeAmount).times(stakingTokenPrice).toNumber())

  const handleStakeInputChange = (input: string) => {
    if (input) {
      const convertedInput = getDecimalAmount(new BigNumber(input), 18)
      const percentage = Math.floor(convertedInput.dividedBy(maxBalance).multipliedBy(100).toNumber())
      setPercent(percentage > 100 ? 100 : percentage)
    } else {
      setPercent(0)
    }
    setStakeAmount(input)
  }

  const handleChangePercent = (sliderPercent: number) => {
    const percentageOfStakingMax = maxBalance.dividedBy(100).multipliedBy(sliderPercent)
    const amountToStake = getFullDisplayBalance(percentageOfStakingMax, 18, 18)
    setStakeAmount(amountToStake)
    setPercent(sliderPercent)
  }

  const handleConfirmClick = async () => {
    setPendingTx(true)
    try {
      // staking
      await onSwapMorph(stakeAmount)
      toastSuccess(`${t('Swapped')}!`, t(`Your Morph funds have been swapped in the swapper!`))
      setPendingTx(false)
      onDismiss()
    } catch (e) {
      toastError(t('Canceled'), t('Please try again and confirm the transaction.'))
      setPendingTx(false)
    }
  }

  return (
    <Modal
      title={isRemovingStake ? t('Unstake') : t('Swap MORPH')}
      onDismiss={onDismiss}
      headerBackground={theme.colors.gradients.cardHeader}
    >
      <Flex alignItems="center" justifyContent="space-between" mb="8px">
        <Text bold>{isRemovingStake ? t('Unstake') : t('SWAP')}:</Text>
        <Flex alignItems="center" minWidth="70px">
          {/* <Image
            src={`/images/tokens/${stakingToken?.symbol?.toLowerCase()}.png`}
            width={48}
            height={48}
            alt={stakingToken.symbol}
          /> */}
          <Text ml="4px" bold>
            MORPH
          </Text>
        </Flex>
      </Flex>
      <BalanceInput
        value={stakeAmount}
        onUserInput={handleStakeInputChange}
        currencyValue={`~${usdValueStaked || 0} USD`}
      />
      <Text mt="8px" ml="auto" color="textSubtle" fontSize="12px" mb="8px">
        Balance: {getFullDisplayBalance(maxBalance, 18)}
      </Text>
      {/* <Slider
        min={0}
        max={100}
        value={percent}
        onValueChanged={handleChangePercent}
        name="stake"
        valueLabel={`${percent}%`}
        step={1}
      /> */}
      <Flex alignItems="center" justifyContent="space-between" mt="8px">
        <PercentageButton onClick={() => handleChangePercent(25)}>25%</PercentageButton>
        <PercentageButton onClick={() => handleChangePercent(50)}>50%</PercentageButton>
        <PercentageButton onClick={() => handleChangePercent(75)}>75%</PercentageButton>
        <PercentageButton onClick={() => handleChangePercent(100)}>MAX</PercentageButton>
      </Flex>
      <Button
        isLoading={pendingTx}
        endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
        onClick={handleConfirmClick}
        disabled={!stakeAmount || parseFloat(stakeAmount) === 0}
        mt="24px"
      >
        {pendingTx ? t('Confirming') : t('Confirm')}
      </Button>
    </Modal>
  )
}

export default StakeModal
