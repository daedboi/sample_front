// import { ChainId } from '@lydiafinance/sdk'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId]
}

export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWavaxAddress = () => {
  return getAddress(tokens.ftm.address)
}
export const getSwapperAddress = () => {
  return getAddress(addresses.swapper)
}
export const getMorphAddress = () => {
  return getAddress(tokens.new_morph.address)
}
export const getPillsAddress = () => {
  return getAddress(tokens.pills.address)
}
// export const getLotteryAddress = () => {
//   return getAddress(addresses.lottery)
// }
// export const getLotteryTicketAddress = () => {
//   return getAddress(addresses.lotteryNFT)
// }
// export const getLydiaProfileAddress = () => {
//   return getAddress(addresses.lydiaProfile)
// }
export const getLydiaLionsAddress = () => {
  return getAddress(addresses.multiCall)
}
// export const getBunnyFactoryAddress = () => {
//   return getAddress(addresses.bunnyFactory)
// }
// export const getClaimRefundAddress = () => {
//   return getAddress(addresses.claimRefund)
// }
// export const getPointCenterIfoAddress = () => {
//   return getAddress(addresses.pointCenterIfo)
// }
// export const getAirdropAddress = () => {
//   return getAddress(addresses.airdrop)
// }
export const getLydVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
// export const getMaximusFeeManagerAddress = () => {
//   return getAddress(addresses.maximusFeeManager)
// }
// export const getMaximusDashboardAddress = () => {
//   return getAddress(addresses.maximusDashboard)
// }
export const getMulticallContract = () => {
  return getAddress(addresses.multiCall)
}
// export const getProfileAddress = () => {
//   return getAddress(addresses.profile)
// }
