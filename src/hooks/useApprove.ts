import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import useToast from 'hooks/useToast'
import { updateUserAllowance, fetchFarmUserDataAsync, updateSwapperAllowance } from 'state/actions'
import { approve, approveSwapper } from 'utils/callHelpers'
import { getSwapperAddress } from 'utils/addressHelpers'
import { useMasterchef, useSousChef } from './useContract'

// Approve a Farm
export const useApprove = (lpContract: Contract) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const { toastError, toastSuccess } = useToast()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)

      dispatch(fetchFarmUserDataAsync(account))
      toastSuccess("Success", `Got approval!`);
      return tx
    } catch (e) {
      toastError("An error occurred.", `Did not get approval, please try again`);
      return false
    }
  }, [account, dispatch, lpContract, masterChefContract, toastError, toastSuccess])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateUserAllowance(sousId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId])

  return { onApprove: handleApprove }
}

export const useSwapperApprove = (morphContract: Contract) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approveSwapper(morphContract, getSwapperAddress(), account)
      dispatch(updateSwapperAllowance(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, morphContract])

  return { onApprove: handleApprove }
}

// Approve the lottery
// export const useLotteryApprove = () => {
//   const { account } = useWeb3React()
//   const lydContract = useLyd()
//   const lotteryContract = useLottery()

//   const handleApprove = useCallback(async () => {
//     try {
//       const tx = await approve(lydContract, lotteryContract, account)
//       return tx
//     } catch (e) {
//       return false
//     }
//   }, [account, lydContract, lotteryContract])

//   return { onApprove: handleApprove }
// }

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWeb3React()
  const onApprove = useCallback(async () => {
    const tx = await tokenContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({ from: account })
    return tx
  }, [account, spenderAddress, tokenContract])

  return onApprove
}
