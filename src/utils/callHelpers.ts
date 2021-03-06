import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

const GAS = 300000

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const approveSwapper = async (morphContract, swapperAddress, account) => {
  return morphContract.methods
    .approve(swapperAddress, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account, decimals = 18) => {
  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeAvax = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: GAS, value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString() })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account, decimals = 18) => {
  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousUnstake = async (sousChefContract, amount, decimals = 18, account) => {
  // shit code: hard fix for old CTK and BLK
  if (sousChefContract.options.address === '0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC') {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account, gas: GAS })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
  if (sousChefContract.options.address === '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831') {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account, gas: GAS })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }
  if (sousChefContract.options.address === '0x453a75908fb5a36d482d5f8fe88eca836f32ead5') {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account, gas: GAS })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  }

  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousEmergencyUnstake = async (sousChefContract, account) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestAvax = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: GAS, value: new BigNumber(0) })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const maximusClaimReward = async (maximusContract, account) => {
  return maximusContract.methods
    .getReward()
    .send({ from: account, value: new BigNumber(0) })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const swapMorph = async (swapperContract, amount, account, decimals = 18) => {
  return swapperContract.methods
    .swap(new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString())
    .send({ from: account, gas: GAS })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
