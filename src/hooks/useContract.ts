import { useMemo } from 'react'
import { Contract } from '@ethersproject/contracts'
import useWeb3 from 'hooks/useWeb3'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
// import { WETH } from '@pancakeswap/sdk'
import { ChainId, WETH } from 'config/constants'
import {
  getBep20Contract,
  getLydContract,
  // getBunnyFactoryContract,
  getLydiaRabbitContract,
  // getProfileContract,
  getIfoContract,
  // getLotteryContract,
  // getLotteryTicketContract,
  getMasterchefContract,
  // getPointCenterIfoContract,
  getSouschefContract,
  // getClaimRefundContract,
  // getAirdropContract,
  getLydVaultContract,
  // getMaximusFeeManagerContract,
  // getMaximusContract,
  // getMaximusDashboardContract,
  getIfoV2Contract,
  getIfoV1Contract,
  getErc721Contract,
  getSwapperContract,
} from 'utils/contractHelpers'
import { getMulticallAddress } from 'utils/addressHelpers'
import { getContract } from '../utils'
import ENS_ABI from '../config/abi/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json'
import WETH_ABI from '../config/abi/weth.json'
import multiCallAbi from '../config/abi/Multicall.json'
import ERC20_ABI from '../config/abi/erc20.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'

/**
 * Helper hooks to get specific contracts (by ABI)
 */
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export const useIfoV1Contract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoV1Contract(address, web3), [address, web3])
}

export const useIfoV2Contract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoV2Contract(address, web3), [address, web3])
}

export const useIfoContract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoContract(address, web3), [address, web3])
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.TESTNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useLyd = () => {
  const web3 = useWeb3()
  return useMemo(() => getLydContract(web3), [web3])
}

// export const useBunnyFactory = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getBunnyFactoryContract(web3), [web3])
// }

export const useLydiaLions = () => {
  const web3 = useWeb3()
  return useMemo(() => getLydiaRabbitContract(web3), [web3])
}

// export const useProfile = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getProfileContract(web3), [web3])
// }

// export const useLottery = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getLotteryContract(web3), [web3])
// }

// export const useLotteryTicket = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getLotteryTicketContract(web3), [web3])
// }

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useSousChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefContract(id, web3), [id, web3])
}

export const useSwapperContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getSwapperContract(web3), [web3])
}

// export const usePointCenterIfoContract = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getPointCenterIfoContract(web3), [web3])
// }

// export const useClaimRefundContract = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getClaimRefundContract(web3), [web3])
// }

// export const useAirdropContract = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getAirdropContract(web3), [web3])
// }

export const useLydVaultContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getLydVaultContract(web3), [web3])
}

// export const useMaximusFeeManagerContract = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getMaximusFeeManagerContract(web3), [web3])
// }

// export const useMaximusContact = (id) => {
//   const web3 = useWeb3()
//   return useMemo(() => getMaximusContract(id, web3), [id, web3])
// }

// export const useMaximusDashboardContract = () => {
//   const web3 = useWeb3()
//   return useMemo(() => getMaximusDashboardContract(web3), [web3])
// }

export const useERC721 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getErc721Contract(address, web3), [address, web3])
}

export function useMulticallContract(): Contract | null {
  return useContract(getMulticallAddress(), multiCallAbi, true)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}
