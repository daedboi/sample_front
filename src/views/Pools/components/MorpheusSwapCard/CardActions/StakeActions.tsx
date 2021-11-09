import React from 'react'
import { Button, useModal, Skeleton } from 'trinityhelper'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import NotEnoughTokensModal from '../Modals/NotEnoughTokensModal'
import StakeModal from '../Modals/StakeModal'

interface StakeActionsProps {
  stakingTokenPrice: number
  maxBalance: BigNumber
  isLoading?: boolean
}

const StakeAction: React.FC<StakeActionsProps> = ({
  stakingTokenPrice,
  maxBalance,
  isLoading = false,
}) => {
  const { t } = useTranslation()
  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol="MORPH" />)
  const [onPresentStake] = useModal(
    <StakeModal maxBalance={maxBalance} stakingTokenPrice={stakingTokenPrice} />,
  )

  const renderStakeAction = () => {
    return <Button onClick={maxBalance.gt(0) ? onPresentStake : onPresentTokenRequired} width="100%">
        {t('Swap')}
      </Button>
  }

  return isLoading ? <Skeleton width="100%" height="52px" /> : renderStakeAction()
}

export default StakeAction
