import React from 'react'
import BigNumber from 'bignumber.js'
import { IconButton, useModal, CalculateIcon } from 'trinityhelper'
import ApyCalculatorModal from 'components/ApyCalculatorModal'
import { useTranslation } from 'contexts/Localization'
import DepositFee from '../FarmTable/DepositFee'

export interface ApyButtonProps {
  lpLabel?: string
  lydPrice?: BigNumber
  apr?: BigNumber
  addLiquidityUrl?: string
  depositFee?: number
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, lydPrice, apr, addLiquidityUrl, depositFee }) => {
  const { t } = useTranslation()
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      linkLabel={`${t('Get')} ${lpLabel}`}
      tokenPrice={lydPrice.toNumber()}
      apr={apr.toNumber()}
      linkHref={addLiquidityUrl}
      depositFee={depositFee}
    />
  )

  const handleClickButton = (event): void => {
    event.stopPropagation()
    onPresentApyModal()
  }

  return (
    <IconButton onClick={handleClickButton} variant="text" scale="sm" ml="4px">
      <CalculateIcon width="18px" />
    </IconButton>
  )
}

export default ApyButton
