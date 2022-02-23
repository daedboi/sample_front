import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

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
    isFinished: true,
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
    isFinished: true,
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
    isFinished: true,
  },
  {
    sousId: 31,
    correspondingFarmId: 38,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.spell,
    contractAddress: {
      250: '0xD98774798E7027f00B060946EF8Ee010df3181C4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '7.189',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 32,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0x85c75Cd5D623afCb6D3eAa12ec150695CcD39c7a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00125',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 33,
    correspondingFarmId: 50,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.yfi,
    contractAddress: {
      250: '0x1a16EA14747Dd9F8a41c68046503239e69fd5938',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000076',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 34,
    correspondingFarmId: 28,
    usesCakeForPrice: false,
    stakingToken: tokens.morph,
    earningToken: tokens.ice,
    contractAddress: {
      250: '0x075b230191a0Dd227699955419004A769BFAF6c1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00788',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 35,
    correspondingFarmId: 51,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wmemo,
    contractAddress: {
      250: '0x7A93C6dDEbc2089F6D5bcccF1025d6D0E31d4DA4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000014054',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 36,
    correspondingFarmId: 58,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.weth,
    contractAddress: {
      250: '0x47775F72E8bfa98dE4613db6cD4b5772aC4aBEC8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000015707',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 37,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x5406566EDCD5B108212Bb69382a8869D761E738E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0261',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 38,
    correspondingFarmId: 51,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wmemo,
    contractAddress: {
      250: '0xdf3A3D03a92F54f8859355924f4581443B80C714',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000000496',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 39,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x7373E5b59bf20345b0D452f9a294A51429ca1F9b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 40,
    correspondingFarmId: 54,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0x9bd3dACe24745Eb117c1F7f93AAEC5e37333c079',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1322',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 41,
    correspondingFarmId: 51,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wmemo,
    contractAddress: {
      250: '0x7928de9d6DB88280DBa4613864a518A98F32D342',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000024966',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 42,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0xaDb29fBBb9962Fe643676e2433114F0446923221',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0148',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 43,
    correspondingFarmId: 54,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0xb6bA5d27b00c2E62e32c0716D7c6505463cFBbf2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.03217',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 44,
    correspondingFarmId: 54,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.mim,
    contractAddress: {
      250: '0x60131EC5BE073F1c34A9b506ce30eA7aAC7eed15',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01653',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 45,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x62CfcABA772e90F743990A8bcEDAC04AbBF7E75f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0272',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 46,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x7E01c21789DEF6572E31Ab6c67A4182E0808428B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0208',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 47,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x2D5F05D8e578397889f5F5C88d8e3b81D8a6f865',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0248',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 48,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x578fb737cf5F3814Ddd80Cd6a7b4FFF9504c0c39',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0105',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 49,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x72185f8e5C017ED53AdEF349D0Ab1f223233b0c9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00719',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 50,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x8f25a8D78EF53342b979C0c4809cD1Fdf81c71Bf',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00413',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 51,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0xde1592f643F9c77f186970daa43D3cAB22C0fd22',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0694',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 52,
    correspondingFarmId: 30,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.spirit,
    contractAddress: {
      250: '0xb31bF9a835584d18595d886D35157467576A76e8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0918',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 53,
    correspondingFarmId: 30,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.spirit,
    contractAddress: {
      250: '0xeF5627d8B7BC8102E0C9760F62E0c5b0b7F38AF6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.13',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 54,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x80da05De8B759B7A9399F43C04A859cC0eaA24AC',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0413',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 55,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x983A4dA9E8baC8b8F2F04B161968906B780f3629',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0222',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 56,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x63AD93bAb2842Fefec06630b9ddC7A2351D7cb91',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0184',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 57,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x616a0030688329b4FaaFda8Cf469f1899e58cBfC',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0247',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 58,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x94005434C078e9d8cC23fF4b5D88FC9bc7c0E1A5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0201',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 59,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0xc948EaD0069adc742539c7D6e038CD132010513D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 60,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x5D29690d7e9f4216dFE3F15C0A2db828D25e9aD5',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0205',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 61,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x913473eaF564e3982E9fFb6D5c559E2adb669D61',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01983',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 62,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0x3BEef19946b0595621650793d45C1cb06e9F810a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.02138',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 63,
    correspondingFarmId: 55,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.wftm,
    contractAddress: {
      250: '0xA75C807d43F75806DFbDd1f302C7F388E610Be87',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.02026',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 64,
    correspondingFarmId: 53,
    usesCakeForPrice: false,
    stakingToken: tokens.pills,
    earningToken: tokens.pills,
    contractAddress: {
      250: '0x40F4F6473F39882645237f39900fc15C2E8dd56c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0165',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
