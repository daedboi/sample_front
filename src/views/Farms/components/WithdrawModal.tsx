import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from 'victusfinance'
import ModalActions from 'components/ModalActions'
import ModalInput from 'components/ModalInput'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  isTokenOnly: boolean
  max: BigNumber
  onConfirm: (amount: string, decimals: number) => void
  onDismiss?: () => void
  tokenName?: string
  tokenDecimals?: number
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isTokenOnly, onConfirm, onDismiss, max, tokenName = '', tokenDecimals = 18 }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, isTokenOnly ? tokenDecimals : undefined)
  }, [max, isTokenOnly, tokenDecimals])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={t('Unstake tokens')} onDismiss={onDismiss}>
      <ModalInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
        inputTitle={t('Unstake')}
      />
      <ModalActions>
        <Button variant="primary" onClick={onDismiss} width="100%">
          {t('Cancel')}
        </Button>
        <Button
          disabled={pendingTx || new BigNumber(val).isNaN() || new BigNumber(val).isLessThanOrEqualTo(0)}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val, isTokenOnly ? tokenDecimals : undefined)
            setPendingTx(false)
            onDismiss()
          }}
          width="100%"
        >
          {pendingTx ? t('Pending Confirmation') : t('Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
