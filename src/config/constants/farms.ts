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
    pid: 0,
    lpSymbol: 'MORPH-FTM LP',
    lpAddresses: {
      250: '0x7D42442f764985F208E6fa6A7CD0e253CB447D58',
    },
    token: tokens.cake,
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
    pid: 2,
    lpSymbol: 'BOO-FTM LP',
    lpAddresses: {
      250: '0xec7178f4c41f346b2721907f5cf7628e388a7a58',
    },
    token: tokens.boo,
    quoteToken: tokens.ftm,
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
    pid: 4,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    token: tokens.ftm,
    quoteToken: tokens.usdc,
  },
  /**
   * Single token pools
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
  // {
  //   pid: 6,
  //   isTokenOnly: true,
  //   lpSymbol: 'PLATIN',
  //   lpAddresses: {
  //     250: '0x60BEFF3E9d3b4E8409471Ecc58e568EB153F1e00',
  //   },
  //   token: tokens.platin,
  //   quoteToken: tokens.usdc,
  // },
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
    pid: 11,
    isTokenOnly: true,
    isCommunity: true,
    lpSymbol: 'SCREAM',
    lpAddresses: {
      250: '0x30872e4fc4edbfd7a352bfc2463eb4fae9c09086',
    },
    token: tokens.scream,
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
  // {
  //   pid: 14,
  //   // isTokenOnly: true,
  //   lpSymbol: 'PLATIN-IRID LP', 
  //   lpAddresses: {
  //     250: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
  //   },
  //   token: tokens.irid,
  //   quoteToken: tokens.cake,
  // },
]

export default farms
