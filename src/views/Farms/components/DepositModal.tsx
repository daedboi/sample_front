import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal, LinkExternal } from 'trinityhelper'
import ModalActions from 'components/ModalActions'
import ModalInput from 'components/ModalInput'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface DepositModalProps {
  isTokenOnly: boolean
  max: BigNumber
  onConfirm: (amount: string, decimals: number) => void
  onDismiss?: () => void
  tokenName?: string
  tokenDecimals?: number
  addLiquidityUrl?: string
  depositFeeBP?: number
}

const DepositModal: React.FC<DepositModalProps> = ({ isTokenOnly, max, onConfirm, onDismiss, tokenName = '', addLiquidityUrl, tokenDecimals = 18, depositFeeBP = 0 }) => {
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
    <Modal title={t('Stake tokens')} onDismiss={onDismiss}>
      <ModalInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        addLiquidityUrl={addLiquidityUrl}
        inputTitle={t('Stake')}
        depositFeeBP={depositFeeBP}
      />
      <ModalActions>
        <Button variant="primary" onClick={onDismiss} width="100%">
          {t('Cancel')}
        </Button>
        <Button
          width="100%"
          disabled={pendingTx || new BigNumber(val).isNaN() || new BigNumber(val).isLessThanOrEqualTo(0)}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val, isTokenOnly ? tokenDecimals : undefined)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? t('Pending Confirmation') : t('Confirm')}
        </Button>
      </ModalActions>
      <LinkExternal color='secondary' href={addLiquidityUrl} style={{ alignSelf: 'center' }}>
        {t('Get')} {tokenName}
      </LinkExternal>
    </Modal>
  )
}

export default DepositModal
