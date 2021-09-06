import tokens from './tokens'
import { PoolConfig, PoolCategory  } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      250: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  //  {
  //  sousId: 193,
  //  stakingToken: tokens.cake,
  //  earningToken: tokens.dvi,
  //  contractAddress: {
  //    97: '',
  //    56: '0x135827eaf9746573c0b013f18ee12f138b9b0384',
  //  },
  //  poolCategory: PoolCategory.CORE,
  //  harvest: true,
  //  sortOrder: 999,
  //  tokenPerBlock: '0.7233',
  //  },

]

export default pools
