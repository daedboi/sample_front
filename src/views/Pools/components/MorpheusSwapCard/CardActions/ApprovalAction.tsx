import React, { useState, useCallback } from 'react'
import { Button, AutoRenewIcon, Skeleton } from 'trinityhelper'
import { useSwapperApprove } from 'hooks/useApprove'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { getMorphAddress } from 'utils/addressHelpers'

interface ApprovalActionProps {
  isLoading?: boolean
}


const ApprovalAction: React.FC<ApprovalActionProps> = ({ isLoading = false }) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const morphContract = useERC20(getMorphAddress())
  const { onApprove } = useSwapperApprove(morphContract)
  const { toastSuccess, toastError } = useToast()

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      if (txHash) {
        toastSuccess(`${t('Contract Enabled')}`, `${t(`You can now swap MORPH in the swapper!`)}`)
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
  }, [onApprove, setRequestedApproval, toastSuccess, toastError, t])

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
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
