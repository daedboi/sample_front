import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserStakedBalance, fetchSwapperInfoAsync, fetchSwapperRatioAsync } from 'state/actions'
import useToast from 'hooks/useToast'
import { sousStake, sousStakeAvax, stake, swapMorph } from 'utils/callHelpers'
import { useMasterchef, useSousChef, useSwapperContract } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const { toastError, toastSuccess } = useToast()

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      try {
        const txHash = await stake(masterChefContract, pid, amount, account, decimals)
        dispatch(fetchFarmUserDataAsync(account))
        console.info(txHash)
        toastSuccess("Success","Staking transaction confirmed")
      } catch (e) {
        toastError("An error occurred.", `Transaction unsuccessful, please try again`);
      }
    },
    [account, dispatch, masterChefContract, pid, toastSuccess, toastError],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId, isUsingAvax = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingAvax) {
        await sousStakeAvax(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, decimals, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingAvax, masterChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export const useSwapMorph = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const swapperContract = useSwapperContract()

  const handleSwapMorph = useCallback(
    async (amount: string) => {
      await swapMorph(swapperContract, amount, account)
      dispatch(fetchSwapperRatioAsync())
      dispatch(fetchSwapperInfoAsync(account))
    },
    [account, dispatch, swapperContract],
  )

  return { onSwapMorph: handleSwapMorph }
}

export default useStake
