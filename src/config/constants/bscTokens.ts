import { Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

// chain-ids
const MAINNET = 250
const TESTNET = 4002

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wftm: new Token(
    MAINNET,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'WBNB',
    'Wrapped FTM',
    'https://fantom.foundation/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ftm: new Token(MAINNET, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'FTM', 'FTM', 'https://fantom.foundation/'),
  morph: new Token(
    MAINNET,
    '0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
    18,
    'MORPH',
    'Morpheus Token',
    'https://morpheusswap.finance/',
  ),
  usdc: new Token(MAINNET, '0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6, 'USDC', 'USDC', 'https://www.circle.com/en/usdc'),
  usdt: new Token(
    MAINNET,
    '0x049d68029688eabf473097a2fc38ef61633a3c7a',
    6,
    'fUSDT',
    'Frapped USDT',
    'https://frapped.io/',
  ),
  ice: new Token(MAINNET, '0xf16e81dce15B08F326220742020379B855B87DF9', 18, 'ICE', 'Popsicle Finance', 'https://popsicle.finance/'),
  crv: new Token(
    MAINNET,
    '0x1e4f97b9f9f913c46f1632781732927b9019c68b',
    18,
    'CRV',
    'Curve DAO',
    'https://curve.fi/',
  ),
  yfi: new Token(
    MAINNET,
    '0x29b0da86e484e1c0029b56e817912d778ac0ec69',
    18,
    'YFI',
    'Yearn Finance',
    'https://yearn.finance/',
  ),
  any: new Token(
    MAINNET,
    '0xddcb3ffd12750b45d32e084887fdf1aabab34239',
    18,
    'ANY',
    'AnySwap',
    'https://anyswap.exchange/',
  ),
  link: new Token(
    MAINNET,
    '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    18,
    'LINK',
    'Chainlink',
    'https://chain.link/',
  ),
  spell: new Token(
    MAINNET,
    '0x468003B688943977e6130F4F68F23aad939a1040',
    18,
    'SPELL',
    'Abracadabra',
    'https://abracadabra.money/',
  ),
  mim: new Token(
    MAINNET,
    '0x82f0B8B456c1A451378467398982d4834b6829c1',
    18,
    'MIM',
    'Abracadabra',
    'https://abracadabra.money/',
  ),
  wmemo: new Token(
    MAINNET,
    '0xddc0385169797937066bbd8ef409b5b3c0dfeb52',
    18,
    'wMEMO',
    'Wonderland',
    'https://www.wonderland.money/',
  ),
  tarot: new Token(
    MAINNET,
    '0xc5e2b037d30a390e62180970b3aa4e91868764cd',
    18,
    'TAROT',
    'Tarot',
    'https://www.tarot.to/',
  ),
  wbtc: new Token(
    MAINNET,
    '0x321162cd933e2be498cd2267a90534a804051b11',
    8,
    'WBTC',
    'Wrapped BTC',
    'https://wbtc.network/',
  ),
  weth: new Token(
    MAINNET,
    '0x74b23882a30290451a17c44f4f05243b6b58c76d',
    18,
    'WETH',
    'Wrapped ETH',
    'https://weth.io/',
  ),
  tomb: new Token(
    MAINNET,
    '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7',
    18,
    'TOMB',
    'Tomb Finance',
    'https://tomb.finance/',
  ),
  tshare: new Token(
    MAINNET,
    '0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37',
    18,
    'TSHARE',
    'Tomb Finance',
    'https://tomb.finance/',
  ),
  dai: new Token(
    MAINNET,
    '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    18,
    'DAI',
    'DAI Stablecoin',
    'https://makerdao.com/en/',
  ),
  scream: new Token(
    MAINNET,
    '0xe0654c8e6fd4d733349ac7e09f6f23da256bf475',
    18,
    'SCREAM',
    'SCREAM',
    'https://scream.sh/',
  ),
  wbnb: new Token(
    MAINNET,
    '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.com/',
  ),
  shade: new Token(
    MAINNET,
    '0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262',
    18,
    'SHADE',
    'Shade Token',
    'https://shade.cash/',
  ),
  kek: new Token(
    MAINNET,
    '0x627524d78B4fC840C887ffeC90563c7A42b671fD',
    18,
    'KEK',
    'Cryptokek.com Token',
    'https://cryptokek.com/',
  ),
}

export const testnetTokens = {
  wftm: new Token(
    TESTNET,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'WBNB',
    'Wrapped FTM',
    'https://fantom.foundation/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  ftm: new Token(TESTNET, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'FTM', 'FTM', 'https://fantom.foundation/'),
  morph: new Token(
    TESTNET,
    '0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
    18,
    'MORPH',
    'Morpheus Token',
    'https://morpheusswap.finance/',
  ),
  usdc: new Token(TESTNET, '0x04068da6c83afcfa0e13ba15a6696662335d5b75', 6, 'USDC', 'USDC', 'https://www.circle.com/en/usdc'),
  mim: new Token(
    TESTNET,
    '0x82f0B8B456c1A451378467398982d4834b6829c1',
    18,
    'MIM',
    'Abracadabra',
    'https://abracadabra.money/',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
