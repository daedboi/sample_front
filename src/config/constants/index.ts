import { JSBI, Percent, Token } from '@pancakeswap/sdk'
import { mainnetTokens, testnetTokens } from './bscTokens'
import farmsConfig from './farms'

export const enum ChainId {
  MAINNET = 250,
  TESTNET = 4002
}
// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.token.symbol)

export const ROUTER_ADDRESS = '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52'
export { farmsConfig, communityFarms }
export { default as poolsConfig } from './pools'
// export { default as maximusConfig } from './maximus'
export { default as ifosConfig } from './ifo'

export const startTimeStamp = 1634322136

export const INITIAL_ALLOWED_SLIPPAGE = 50
export const BIPS_BASE = JSBI.BigInt(10000)

// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wftm, mainnetTokens.mim, mainnetTokens.usdc, mainnetTokens.usdt],
  [ChainId.TESTNET]: [testnetTokens.wftm, testnetTokens.morph, testnetTokens.usdc],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [mainnetTokens.morph, mainnetTokens.wftm],
    [mainnetTokens.usdc, mainnetTokens.usdt],
    [mainnetTokens.mim, mainnetTokens.usdt],
  ],
}

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB

// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))

export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wftm,
    mainnetTokens.morph,
    mainnetTokens.mim,
    mainnetTokens.usdt,
    mainnetTokens.wbtc,
    mainnetTokens.dai,
    mainnetTokens.weth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wftm, testnetTokens.morph, testnetTokens.usdc],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
 export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
 export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')


// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.mim, mainnetTokens.morph, mainnetTokens.wftm],
  [ChainId.TESTNET]: [testnetTokens.wftm, testnetTokens.morph, testnetTokens.mim],
}

export const WETH = {
  250: new Token(250, '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18, 'WFTM', 'Wrapped FTM', 'https://fantom.foundation/')
}

export const ETHER = new Token(250, '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18, 'FTM', 'FTM', 'https://fantom.foundation/')

export const BIG_INT_ZERO = JSBI.BigInt(0)