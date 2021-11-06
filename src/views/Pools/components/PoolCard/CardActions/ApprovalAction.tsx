import React, { useState, useCallback } from 'react'
import { Button, AutoRenewIcon, Skeleton } from 'trinityhelper'
import { useSousApprove } from 'hooks/useApprove'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { getAddress } from 'utils/addressHelpers'
import { Pool } from 'state/types'
import { useTimestamp } from 'state/hooks'

interface ApprovalActionProps {
  pool: Pool
  isLoading?: boolean
}


const ApprovalAction: React.FC<ApprovalActionProps> = ({ pool, isLoading = false }) => {
  const { sousId, stakingToken, earningToken, endBlock } = pool
  const { t } = useTranslation()
  const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { toastSuccess, toastError } = useToast()
  const currentBlock = useTimestamp()
  const isFinished = pool.isFinished || (Math.max(endBlock - currentBlock, 0) === 0)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      if (txHash) {
        toastSuccess(`${t('Contract Enabled')}`, `${t(`You can now stake in the ${earningToken.symbol} pool!`)}`)
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(
          `${t('Error')}`,
          `${t(`Please try again. Confirm the transaction and make sure you are paying enough gas!`)}`,
        )
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
      toastError('Error')
    }
  }, [onApprove, setRequestedApproval, toastSuccess, toastError, t, earningToken])

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={isFinished || requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </Button>
      )}
    </>
  )
}

export default ApprovalAction
