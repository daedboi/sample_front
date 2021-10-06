const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  // MORPH
  cake: {
    symbol: 'CAKE',
    address: {
      250: '0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
      projectLink: 'https://morpheusswap.finance/'
    },
    decimals: 18,
  },
  wbnb: {
    symbol: 'WBNB',
    address: {
      250: '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
    },
    decimals: 18,
    projectLink: 'https://www.binance.org/en/blog/what-is-wbnb/'
  },
  usdc: {
    symbol: 'USDC',
    address: {
      250: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
    },
    decimals: 6,
    projectLink: 'https://www.circle.com/en/usdc'
  },
  usdt: {
    symbol: 'fUSDT',
    address: {
      250: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
    },
    decimals: 6,
    projectLink: 'https://frapped.io/'
  },
  spirit: {
    symbol: 'SPIRIT',
    address: {
      250: '0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
    },
    decimals: 18,
    projectLink: 'https://www.spiritswap.finance/'
  },
  ironice: {
    symbol: 'IronICE',
    address: {
      250: '0x260b3E40c714Ce8196465Ec824Cd8Bb915081812',
    },
    decimals: 18,
    projectLink: 'https://app.iron.finance/'
  },
  ice: {
    symbol: 'ICE',
    address: {
      250: '0xf16e81dce15B08F326220742020379B855B87DF9',
    },
    decimals: 18,
    projectLink: 'https://popsicle.finance/'
  },
  icev2: {
    symbol: 'ICE (v2)',
    address: {
      250: '0xf16e81dce15B08F326220742020379B855B87DF9',
    },
    decimals: 18,
    projectLink: 'https://popsicle.finance/'
  },
  sun: {
    symbol: 'SUN',
    address: {
      250: '0x60e91f89A2986975822De3BfE50df002Ef46EaAD',
    },
    decimals: 18,
    projectLink: 'https://sunfinance.site/'
  },
  yfi: {
    symbol: 'YFI',
    address: {
      250: '0x29b0da86e484e1c0029b56e817912d778ac0ec69',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/'
  },
  any: {
    symbol: 'ANY',
    address: {
      250: '0xddcb3ffd12750b45d32e084887fdf1aabab34239',
    },
    decimals: 18,
    projectLink: 'https://anyswap.exchange/'
  },
  link: {
    symbol: 'LINK',
    address: {
      250: '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8',
    },
    decimals: 18,
    projectLink: 'https://chain.link/'
  },
  tcs: {
    symbol: 'TCS',
    address: {
      250: '0xfbfae0dd49882e503982f8eb4b8b1e464eca0b91',
    },
    decimals: 18,
    projectLink: 'https://timechainswap.com/'
  },
  spell: {
    symbol: 'SPELL',
    address: {
      250: '0x468003B688943977e6130F4F68F23aad939a1040',
    },
    decimals: 18,
    projectLink: 'https://abracadabra.money/'
  },
  mim: {
    symbol: 'MIM',
    address: {
      250: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    decimals: 18,
    projectLink: 'https://abracadabra.money/'
  },
  tarot: {
    symbol: 'TAROT',
    address: {
      250: '0xc5e2b037d30a390e62180970b3aa4e91868764cd',
    },
    decimals: 18,
    projectLink: 'https://www.tarot.to/'
  },
  wbtc: {
    symbol: 'WBTC',
    address: {
      250: '0x321162cd933e2be498cd2267a90534a804051b11',
    },
    decimals: 8,
    projectLink: 'https://wbtc.network/'
  },
  weth: {
    symbol: 'WETH',
    address: {
      250: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
    },
    decimals: 18,
    projectLink: 'https://weth.io/'
  },
  kins: {
    symbol: 'KINS',
    address: {
      250: '0x6eced8e16eda61e65292f019b165542a5906ecd6',
    },
    decimals: 18,
    projectLink: 'https://pumpkins.farm/'
  },
  reaper: {
    symbol: 'REAPER',
    address: {
      250: '0x117dB78176C8eDe4F12fCd29d85Cd96b91A4cbBb',
    },
    decimals: 18,
    projectLink: 'https://www.grim.finance/'
  },
  papr: {
    symbol: 'PAPR',
    address: {
      250: '0xc5e7a99a20941cbf56e0d4de608332cdb792e23e',
    },
    decimals: 18,
    projectLink: 'https://ftm.paprprintr.finance/'
  },
  totem: {
    symbol: 'TOTEM',
    address: {
      250: '0x31a37aedc0c18aa139e120e1cdc673bbb2063e6f',
    },
    decimals: 18,
    projectLink: 'https://totemfinance.app/#/'
  },
  tomb: {
    symbol: 'TOMB',
    address: {
      250: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7',
    },
    decimals: 18,
    projectLink: 'https://tomb.finance/'
  },
  morph: {
    symbol: 'MORPH',
    address: {
      250: '0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
    },
    decimals: 18,
    projectLink: 'https://morpheusswap.finance/'
  },
  dai: {
    symbol: 'DAI',
    address: {
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    },
    decimals: 18,
    projectLink: 'https://makerdao.com/en/'
  },
  daiv2: {
    symbol: 'DAI (v2)',
    address: {
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
    },
    decimals: 18,
    projectLink: 'https://makerdao.com/en/'
  },
  boo: {
    symbol: 'BOO',
    address: {
      250: '0x841fad6eae12c286d1fd18d1d525dffa75c7effe',
    },
    decimals: 18,
    projectLink: 'https://spookyswap.finance/'
  },
  scream: {
    symbol: 'SCREAM',
    address: {
      250: '0xe0654c8e6fd4d733349ac7e09f6f23da256bf475',
    },
    decimals: 18,
    projectLink: 'https://scream.sh/'
  },
  ftm: {
    symbol: 'FTM',
    address: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    },
    decimals: 18,
    projectLink: 'https://fantom.foundation/'
  },
  wftm: {
    symbol: 'WFTM',
    address: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    },
    decimals: 18,
    projectLink: 'https://fantom.foundation/'
  },
  kalm: {
    symbol: 'KALM',
    address: {
      250: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
      // 56: '0x4BA0057f784858a48fe351445C672FF2a3d43515',
    },
    decimals: 18,
    projectLink: 'https://kalmar.io/',
  },
}

export default tokens
