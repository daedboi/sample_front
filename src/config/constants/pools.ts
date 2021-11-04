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
    isFinished: true,
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
    isFinished: true,
  },
  {
    sousId: 3,
    correspondingFarmId: 14,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.dai,
    contractAddress: {
      250: '0x8b0c89A08045A38A710fd141443d463B960C9aAe',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 4,
    correspondingFarmId: 26,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.sun,
    contractAddress: {
      250: '0x9055064B490604E41593d9271a53603CF48204F4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '8.267',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 5,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0x4bDA0C69f7F15a43Ef35881c2aB3B7f995630A14',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00677',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 6,
    correspondingFarmId: 20,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.scream,
    contractAddress: {
      250: '0x5db1AD1E0ECC9EfBF69d3566C54eE650Cd712Fa5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000286',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 7,
    correspondingFarmId: 14,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.daiv2,
    contractAddress: {
      250: '0x791A8d97FeeF371D1AEc6f25B7C3E4545c847476',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.025',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 8,
    correspondingFarmId: 36,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0x0268F3E95735C1EFcc3450d6630f45448B3E233d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5.25',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 9,
    correspondingFarmId: 41,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.tcs,
    contractAddress: {
      250: '0xDcE71E5A3E45894c2828816b7FfD8F5423929e19',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0115',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 10,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0xeb4ad0BA4CCC7702e2a6c3200D535272f19BAa81',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0018',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 11,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0xD7dcee07245C5ebBE7577E30bE7D0bb6CC2dbD63',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.025',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 12,
    correspondingFarmId: 36,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0xB8F1e3B0d5BB8EEAf9CD382dbC3524f49A72fC37',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.24',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 13,
    correspondingFarmId: 4,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x6c993A096FF1A99aFb5eF23CE381CdE9129CdE43',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.015',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 14,
    correspondingFarmId: 20,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.scream,
    contractAddress: {
      250: '0xE8515251b84E0FfF80F90fC940ecD09Cd8Aa1778',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00039',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 15,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0x35f439Ea8FC52C5f3Bd754Da6199128eFc8e429f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0324',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 16,
    correspondingFarmId: 30,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spirit,
    contractAddress: {
      250: '0xd93B44ABFaA4bA8BC106B9F56ADDa71ee63D88dc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.074',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 17,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0x4593694225D1B370D47E76E05b31B83318981427',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0014',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 18,
    correspondingFarmId: 50,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.yfi,
    contractAddress: {
      250: '0x835CACd522579A25dD00D9B638e48A16634Bfc39',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000108',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 19,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0xC26Eb963d452765F895dBD46941C0D4523307675',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0496',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 20,
    correspondingFarmId: 36,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0x66534c7a524C535B6FAF6036ad5e05c3b9B1F999',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2.215',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 21,
    correspondingFarmId: 4,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x6f6Ad3c941D300ffd75d83A37bbcB4f9cfb68231',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0165',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 22,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0x626617aC7f660EA1894d2c52B00DFaF946CaC791',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00076',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 23,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0x672DfFa89E287Fd51B1469BFbd4296803AFc7bd0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0165',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 24,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0xF724D41c806c8292606B6723b561A5a222cDC7e3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00275',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 25,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0x0059130c9fE1ad2F824DAcFE5054d902aE2627F0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.06635',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 26,
    correspondingFarmId: 36,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0xc5Ad8cC30479f8c7EC8074E72f5Ba727eCC9BE2d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2.465',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 27,
    correspondingFarmId: 4,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0xFE5912d1Ca1eaF62A35Fe25ECF34c33b08b13236',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.04892',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 28,
    correspondingFarmId: 36,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0x9B375e56dEf8B00C61175F2dbaA018E56ff6D9Ef',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4.3032',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 29,
    correspondingFarmId: 37,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0xF2c513C9195677970838635a1Eba76237D08bd3D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.135',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 30,
    correspondingFarmId: 38,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0x8544940eDD31d4be11A7c64cEadD61EdeBB1b230',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5.0347',
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
