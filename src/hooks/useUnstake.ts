import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import useToast from 'hooks/useToast'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { sousEmergencyUnstake, sousUnstake, unstake } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract'
import { useAppDispatch } from '../state'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const { toastError, toastSuccess } = useToast()

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      try {
        const txHash = await unstake(masterChefContract, pid, amount, account, decimals)
        dispatch(fetchFarmUserDataAsync(account))
        console.info(txHash)
        toastSuccess("Success","Unstaking transaction confirmed")
      } catch (e) {
        toastError("An error occurred.", `Transaction unsuccessful, please try again`);
      }
      },
      [account, dispatch, masterChefContract, pid, toastSuccess, toastError],
  )

  return { onUnstake: handleUnstake }
}

// const ELECTRUMIDS = [5, 6, 3, 1, 22, 23, 78]

export const useSousUnstake = (sousId, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (enableEmergencyWithdraw) {
        const txHash = await sousEmergencyUnstake(sousChefContract, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, masterChefContract, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
