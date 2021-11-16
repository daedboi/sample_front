import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //  pid: 0,
  //  lpSymbol: 'CAKE',
  //  lpAddresses: {
  //    250: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //  },
  //  token: tokens.syrup,
  //  quoteToken: tokens.wbnb,
  // },
  {
    pid: 53,
    lpSymbol: 'PILLS-MIM LP',
    lpAddresses: {
      250: '0x93D93F3D1aa417B212BAe56D8DF9C88dCCf73A31',
    },
    token: tokens.pills,
    quoteToken: tokens.mim,
  },
  {
    pid: 54,
    lpSymbol: 'FTM-MIM LP',
    lpAddresses: {
      250: '0x9270bD93a9298047Fdbab9CbD3Bd87FE674A907B',
    },
    token: tokens.mim,
    quoteToken: tokens.ftm,
  },
  {
    pid: 55,
    lpSymbol: 'FTM-USDC LP',
    lpAddresses: {
      250: '0xD095675C684452825e61804dA7d6CEccB613AFe8',
    },
    token: tokens.ftm,
    quoteToken: tokens.usdc,
  },
  {
    pid: 56,
    lpSymbol: 'FTM-fUSDT LP',
    lpAddresses: {
      250: '0xbCa706f1CD20C6e9c00FFBBEC93E66a5302c24b3',
    },
    token: tokens.usdt,
    quoteToken: tokens.ftm,
  },
  {
    pid: 57,
    lpSymbol: 'FTM-DAI LP',
    lpAddresses: {
      250: '0xbcF8dF676dC1935bd6c3a4BbCC43030531641a6f',
    },
    token: tokens.dai,
    quoteToken: tokens.ftm,
  },
  {
    pid: 58,
    lpSymbol: 'FTM-wETH LP',
    lpAddresses: {
      250: '0x4B884c817521247cb9fa2530F2e9D4eABb3B4066',
    },
    token: tokens.weth,
    quoteToken: tokens.ftm,
  },
  {
    pid: 59,
    lpSymbol: 'FTM-wBTC LP',
    lpAddresses: {
      250: '0x751A1Bff4Faa4D2615b9ca2a1a7bB3fC935dA494',
    },
    token: tokens.wbtc,
    quoteToken: tokens.ftm,
  },
  {
    pid: 60,
    lpSymbol: 'nICE-MIM LP',
    lpAddresses: {
      250: '0x9f65dF49E9c7430181Ed37e4374b37d6848Abb55',
    },
    token: tokens.nice,
    quoteToken: tokens.mim,
  },
  {
    pid: 61,
    lpSymbol: 'sSPELL-MIM LP',
    lpAddresses: {
      250: '0xd782EFA7C4361e0BDFc5278943566906AA638f04',
    },
    token: tokens.sspell,
    quoteToken: tokens.mim,
  },
  // {
  //   pid: 63,
  //   lpSymbol: 'wMEMO-MIM LP',
  //   lpAddresses: {
  //     250: '0xc9b98e4a4e306dfc24bc5b5f66e271e19fd74c5a',
  //   },
  //   token: tokens.wmemo,
  //   quoteToken: tokens.mim,
  // },

  
  /**
   * Finished LPs
   */
  {
    pid: 0,
    lpSymbol: 'MORPH-FTM LP',
    lpAddresses: {
      250: '0x7D42442f764985F208E6fa6A7CD0e253CB447D58',
    },
    token: tokens.cake,
    quoteToken: tokens.ftm,
  },
  {
    pid: 35,
    isSpirit: true,
    lpSymbol: 'MORPH-MIM LP',
    lpAddresses: {
      250: '0x73b2cAD57A75c1DAE593514A62f64d6a4EcD601c',
    },
    token: tokens.cake,
    quoteToken: tokens.mim,
  },
  {
    pid: 3,
    lpSymbol: 'wETH-FTM LP',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
    },
    token: tokens.weth,
    quoteToken: tokens.ftm,
  },
  {
    pid: 45,
    lpSymbol: 'wETH-wBTC LP',
    lpAddresses: {
      250: '0xec454eda10accdd66209c57af8c12924556f3abd',
    },
    token: tokens.wbtc,
    quoteToken: tokens.weth,
  },
  {
    pid: 46,
    lpSymbol: 'wBTC-FTM LP',
    lpAddresses: {
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
    },
    token: tokens.wbtc,
    quoteToken: tokens.ftm,
  },
  {
    pid: 37,
    isSpirit: true,
    lpSymbol: 'MIM-FTM LP',
    lpAddresses: {
      250: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
    },
    token: tokens.mim,
    quoteToken: tokens.ftm,
  },
  {
    pid: 28,
    lpSymbol: 'ICE-FTM LP',
    lpAddresses: {
      250: '0x623ee4a7f290d11c11315994db70fb148b13021d',
    },
    token: tokens.ice,
    quoteToken: tokens.ftm,
  },
  {
    pid: 36,
    isSpirit: true,
    lpSymbol: 'SPELL-fUSDT LP',
    lpAddresses: {
      250: '0x31c0385DDE956f95D43Dac80Bd74FEE149961f4c',
    },
    token: tokens.spell,
    quoteToken: tokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'BOO-FTM LP',
    lpAddresses: {
      250: '0xec7178f4c41f346b2721907f5cf7628e388a7a58',
    },
    token: tokens.boo,
    quoteToken: tokens.ftm,
  },
  {
    pid: 20,
    lpSymbol: 'SCREAM-FTM LP',
    lpAddresses: {
      250: '0x30872e4fc4edbFD7a352bFC2463eb4fAe9C09086',
    },
    token: tokens.scream,
    quoteToken: tokens.ftm,
  },
  {
    pid: 4,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    token: tokens.ftm,
    quoteToken: tokens.usdc,
  },
  {
    pid: 49,
    lpSymbol: 'YFI-wETH LP',
    lpAddresses: {
      250: '0x0845c0bfe75691b1e21b24351aac581a7fb6b7df',
    },
    token: tokens.yfi,
    quoteToken: tokens.weth,
  },
  {
    pid: 50,
    isSpirit: true,
    lpSymbol: 'YFI-FTM LP',
    lpAddresses: {
      250: '0x4fc38a2735c7da1d71ccabf6dec235a7da4ec52c',
    },
    token: tokens.yfi,
    quoteToken: tokens.ftm,
  },
  {
    pid: 23,
    lpSymbol: 'TAROT-FTM LP',
    lpAddresses: {
      250: '0x11d90ea9d16e1ee5879b299a819f6d618816d70f',
    },
    token: tokens.tarot,
    quoteToken: tokens.ftm,
  },
  {
    pid: 30,
    isSpirit: true,
    lpSymbol: 'SPIRIT-FTM LP',
    lpAddresses: {
      250: '0x30748322b6e34545dbe0788c421886aeb5297789',
    },
    token: tokens.spirit,
    quoteToken: tokens.ftm,
  },
  {
    pid: 32,
    lpSymbol: 'USDC-fUSDT LP',
    lpAddresses: {
      250: '0xfdef392adc84607135c24ca45de5452d77aa10de',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
  {
    pid: 17,
    isCommunity: true,
    lpSymbol: 'REAPER-FTM LP', 
    lpAddresses: {
      250: '0x8c24602e232b13703afcda2fb661228c9005ce8c',
    },
    token: tokens.reaper,
    quoteToken: tokens.ftm,
  },
  {
    pid: 41,
    isSpirit: true,
    isCommunity: true,
    lpSymbol: 'TCS-FTM LP',
    lpAddresses: {
      250: '0x4a5a8bd8e3cdf572e00050771ba66d3ee94571c1',
    },
    token: tokens.tcs,
    quoteToken: tokens.ftm,
  },
  {
    pid: 26,
    isCommunity: true,
    isSpirit: true,
    lpSymbol: 'SUN-FTM LP', 
    lpAddresses: {
      250: '0xdAaca3CA5974626E7BB18B2f2245438e04d128f1',
    },
    token: tokens.sun,
    quoteToken: tokens.ftm,
  },
  {
    pid: 21,
    isCommunity: true,
    isSpirit: true,
    lpSymbol: 'PAPR-USDC LP', 
    lpAddresses: {
      250: '0x64bb8a5a4b2f7bd354876059c845c77cb4554818',
    },
    token: tokens.papr,
    quoteToken: tokens.usdc,
  },
  {
    pid: 15,
    isCommunity: true,
    lpSymbol: 'TOTEM-FTM LP', 
    lpAddresses: {
      250: '0x85263F06633A75f43A4074CaC84d6C4474080c9C',
    },
    token: tokens.totem,
    quoteToken: tokens.ftm,
  },
  {
    pid: 1,
    lpSymbol: 'MORPH-USDC LP',
    lpAddresses: {
      250: '0x3425B1c18491dDC780fb5ab7ACC3dF7D8B802C87',
    },
    token: tokens.cake,
    quoteToken: tokens.usdc,
  },
  {
    pid: 19,
    isSpirit: true,
    lpSymbol: 'MORPH-SPIRIT LP',
    lpAddresses: {
      250: '0x862932D09dFB15B90b6F0034906a06313cD7ef42',
    },
    token: tokens.spirit,
    quoteToken: tokens.cake,
  },
  {
    pid: 22,
    lpSymbol: 'MORPH-TAROT LP',
    lpAddresses: {
      250: '0x827aD29cB88f135C5994355309E98382a2773e47',
    },
    token: tokens.tarot,
    quoteToken: tokens.cake,
  },
  {
    pid: 16,
    lpSymbol: 'MORPH-TOMB LP',
    lpAddresses: {
      250: '0x224A9029c65d4A34dde7393c439ba0C6089c207d',
    },
    token: tokens.tomb,
    quoteToken: tokens.cake,
  },
  {
    pid: 27,
    lpSymbol: 'MORPH-ICE LP',
    lpAddresses: {
      250: '0x3746A3F50Dc59029554B314b9a227c2dBB8Aa743',
    },
    token: tokens.ice,
    quoteToken: tokens.cake,
  },
  {
    pid: 33,
    lpSymbol: 'MORPH-IronICE LP',
    lpAddresses: {
      250: '0x0eC281e5194eF05A3f0Ed2392CEd2dF442c9C491',
    },
    token: tokens.ironice,
    quoteToken: tokens.cake,
  },
  {
    pid: 40,
    isSpirit: true,
    lpSymbol: 'MORPH-TCS LP',
    lpAddresses: {
      250: '0xfB7e4164F073757CE1b7DceC6be3D000eA760096',
    },
    token: tokens.tcs,
    quoteToken: tokens.cake,
  },
  /**
   * Single token pools
   */

   {
    pid: 62,
    isTokenOnly: true,
    lpSymbol: 'PILLS',
    lpAddresses: {
      250: '0x93D93F3D1aa417B212BAe56D8DF9C88dCCf73A31',
    },
    token: tokens.pills,
    quoteToken: tokens.mim,
  },
  {
    pid: 51,
    isTokenOnly: true,
    lpSymbol: 'wMEMO',
    lpAddresses: {
      250: '0xc9b98e4a4e306dfc24bc5b5f66e271e19fd74c5a',
    },
    token: tokens.wmemo,
    quoteToken: tokens.mim,
  },
  {
    pid: 6,
    isTokenOnly: true,
    lpSymbol: 'wFTM',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    token: tokens.ftm,
    quoteToken: tokens.usdc,
  },
  {
    pid: 43,
    isTokenOnly: true,
    lpSymbol: 'YFI',
    lpAddresses: {
      250: '0x4fc38a2735c7da1d71ccabf6dec235a7da4ec52c',
    },
    token: tokens.yfi,
    quoteToken: tokens.ftm,
  },
  {
    pid: 29,
    isTokenOnly: true,
    lpSymbol: 'ICE',
    lpAddresses: {
      250: '0x623ee4a7f290d11c11315994db70fb148b13021d',
    },
    token: tokens.ice,
    quoteToken: tokens.ftm,
  },
  {
    pid: 38,
    isTokenOnly: true,
    isSpirit: true,
    lpSymbol: 'SPELL',
    lpAddresses: {
      250: '0x31c0385DDE956f95D43Dac80Bd74FEE149961f4c',
    },
    token: tokens.spell,
    quoteToken: tokens.usdt,
  },
  {
    pid: 39,
    isTokenOnly: true,
    isSpirit: true,
    lpSymbol: 'MIM',
    lpAddresses: {
      250: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
    },
    token: tokens.mim,
    quoteToken: tokens.ftm,
  },



    /**
   * FINISHED
   */
  {
    pid: 5,
    isTokenOnly: true,
    lpSymbol: 'MORPH',
    lpAddresses: {
      250: '0x3425B1c18491dDC780fb5ab7ACC3dF7D8B802C87',
    },
    token: tokens.cake,
    quoteToken: tokens.usdc,
  },
  {
    pid: 52,
    isTokenOnly: true,
    lpSymbol: 'CRV',
    lpAddresses: {
      250: '0xb471ac6ef617e952b84c6a9ff5de65a9da96c93b',
    },
    token: tokens.crv,
    quoteToken: tokens.ftm,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'wETH',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
    },
    token: tokens.weth,
    quoteToken: tokens.ftm,
  },
  {
    pid: 9,
    isTokenOnly: true,
    lpSymbol: 'wBTC',
    lpAddresses: {
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
    },
    token: tokens.wbtc,
    quoteToken: tokens.ftm,
  },
  {
    pid: 7,
    isTokenOnly: true,
    lpSymbol: 'BOO',
    lpAddresses: {
      250: '0xec7178f4c41f346b2721907f5cf7628e388a7a58',
    },
    token: tokens.boo,
    quoteToken: tokens.ftm,
  },
  {
    pid: 25,
    isTokenOnly: true,
    isSpirit: true,
    lpSymbol: 'SPIRIT',
    lpAddresses: {
      250: '0x30748322b6e34545dbe0788c421886aeb5297789',
    },
    token: tokens.spirit,
    quoteToken: tokens.ftm,
  },
  {
    pid: 11,
    isTokenOnly: true,
    lpSymbol: 'SCREAM',
    lpAddresses: {
      250: '0x30872e4fc4edbfd7a352bfc2463eb4fae9c09086',
    },
    token: tokens.scream,
    quoteToken: tokens.ftm,
  },
  {
    pid: 24,
    isTokenOnly: true,
    lpSymbol: 'TAROT',
    lpAddresses: {
      250: '0x11d90ea9d16e1ee5879b299a819f6d618816d70f',
    },
    token: tokens.tarot,
    quoteToken: tokens.ftm,
  },
  {
    pid: 44,
    isTokenOnly: true,
    lpSymbol: 'ANY',
    lpAddresses: {
      250: '0x5c021d9cfad40aafc57786b409a9ce571de375b4',
    },
    token: tokens.any,
    quoteToken: tokens.ftm,
  },
  {
    pid: 48,
    isTokenOnly: true,
    lpSymbol: 'TOMB',
    lpAddresses: {
      250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
    },
    token: tokens.tomb,
    quoteToken: tokens.ftm,
  },
  {
    pid: 47,
    isTokenOnly: true,
    lpSymbol: 'TSHARE',
    lpAddresses: {
      250: '0x4733bc45ef91cf7ccecaeedb794727075fb209f2',
    },
    token: tokens.tshare,
    quoteToken: tokens.ftm,
  },
  {
    pid: 10,
    isTokenOnly: true,
    lpSymbol: 'wBNB',
    lpAddresses: {
      250: '0x956de13ea0fa5b577e4097be837bf4ac80005820',
    },
    token: tokens.wbnb,
    quoteToken: tokens.ftm,
  },
  {
    pid: 31,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    lpAddresses: {
      250: '0x89d9bc2f2d091cfbfc31e333d6dc555ddbc2fd29',
    },
    token: tokens.link,
    quoteToken: tokens.ftm,
  },
  {
    pid: 12,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    token: tokens.usdc,
    quoteToken: tokens.ftm,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'fUSDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
    },
    token: tokens.usdt,
    quoteToken: tokens.ftm,
  },
  {
    pid: 14,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      250: '0xe120ffbda0d14f3bb6d6053e90e63c572a66a428',
    },
    token: tokens.dai,
    quoteToken: tokens.ftm,
  },
  {
    pid: 18,
    isCommunity: true,
    isTokenOnly: true,
    lpSymbol: 'KINS',
    lpAddresses: {
      250: '0xD24cf15F02D1cC4C868C303925aDF247118CAd9B',
    },
    token: tokens.kins,
    quoteToken: tokens.ftm,
  },
  {
    pid: 34,
    isTokenOnly: true,
    lpSymbol: 'IronICE',
    lpAddresses: {
      250: '0x46C8054edc2d7F8CD517fD9ba1688e1285d2345d',
    },
    token: tokens.ironice,
    quoteToken: tokens.ftm,
  },
  {
    pid: 42,
    isTokenOnly: true,
    isCommunity: true,
    lpSymbol: 'TCS',
    lpAddresses: {
      250: '0x4a5a8bd8e3cdf572e00050771ba66d3ee94571c1',
    },
    token: tokens.tcs,
    quoteToken: tokens.ftm,
  },
 
]

export default farms
