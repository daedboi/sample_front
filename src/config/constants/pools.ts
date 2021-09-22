import tokens from './tokens'
import { PoolConfig, PoolCategory  } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   correspondingFarmId: 0,
  //   usesCakeForPrice: false,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.cake,
  //   contractAddress: {
  //     250: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 1,
    correspondingFarmId: 4,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x2854980e1f6526CB5AeC8d53c5028AF486368ea1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    correspondingFarmId: 19,
    usesCakeForPrice: true,
    stakingToken: tokens.morph,
    earningToken: tokens.spirit,
    contractAddress: {
      250: '0x415742c217eA4941B706ff358bF6178985590cFA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.155',
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
