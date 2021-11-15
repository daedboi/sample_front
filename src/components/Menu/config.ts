import { MenuEntry } from 'trinityhelper'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    href: 'https://swap.morpheusswap.app/swap'
    // items: [
    //   {
    //     label: 'Exchange',
    //     href: 'https://swap.morpheusswap.app/#/swap',
    //   },
    //   {
    //     label: 'Liquidity',
    //     href: 'https://swap.morpheusswap.app/#/pool',
    //   },
    // ],
  },
  // {
  //   label: 'Trade (Spirit)',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://swap.spiritswap.finance/#/swap/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://swap.spiritswap.finance/#/add/0x82f0B8B456c1A451378467398982d4834b6829c1/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d',
  //     },
  //   ],
  // },
  // {
  //   label: 'LYD Gate',
  //   icon: 'GateIcon',
  //   href: 'https://gate.lydia.finance/#/bridge',
  //   status: {
  //     text: 'Bridge',
  //     color: 'success',
  //   },
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Neo Pools / PILLS',
    icon: 'GroupsIcon',
    href: '/staking',
  },
  // {
  //   label: 'Maximus Farm',
  //   icon: 'CrownIcon',
  //   href: '/maximus',
  //   status: {
  //     text: 'NEW',
  //     color: 'success',
  //   },
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  //   status: {
  //     text: 'NEW',
  //     color: 'success',
  //   },
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  //   status: {
  //     text: 'NEW',
  //     color: 'success',
  //   },
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://docs.lydia.finance/security/certik-audit',
  // },
  // {
  //   label: 'Listings',
  //   icon: 'ListingIcon',
  //   items: [
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/lydia-finance',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/lydia-finance',
  //     },
  //     {
  //       label: 'LiveCoinWatch',
  //       href: 'https://www.livecoinwatch.com/price/LydiaFinance-_LYD',
  //     },
  //     {
  //       label: 'Markr.io',
  //       href: 'https://markr.io/#/applications/LydiaFinance',
  //     },
  //     {
  //       label: 'DefiLama',
  //       href: 'https://defillama.com/protocol/lydia',
  //     },
  //     {
  //       label: 'AvaxProjects',
  //       href: 'https://www.avax-projects.com/',
  //     },
  //     {
  //       label: 'Coinpaprika',
  //       href: 'https://coinpaprika.com/coin/lyd-lydia-finance-token/',
  //     },
  //     {
  //       label: 'Nomics',
  //       href: 'https://nomics.com/assets/lyd2-lydia-finance',
  //     },
  //   ],
  // },
  // {
  //   label: 'Listings',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Spooky Info',
  //       href: 'https://info.spookyswap.finance/token/0x0789ff5ba37f72abc4d561d00648acadc897b32d',
  //     },
  //     {
  //       label: 'Spirit Info',
  //       href: 'https://info.spiritswap.finance/token/0x0789ff5ba37f72abc4d561d00648acadc897b32d',
  //     },
  //     {
  //       label: 'Kek Tools',
  //       href: 'https://kek.tools/t/0x0789ff5ba37f72abc4d561d00648acadc897b32d',
  //     },
  //     {
  //       label: 'Zoocoin',
  //       href: 'https://charts.zoocoin.cash/charts?exchange=SpookySwap&pair=0x7D42442f764985F208E6fa6A7CD0e253CB447D58',
  //     },
  //     {
  //       label: 'Vfat.tools',
  //       href: 'https://vfat.tools/fantom/morpheusswap/',
  //     },
  //     {
  //       label: 'Nomics',
  //       href: 'https://nomics.com/assets/morph4-morpheus-token',

  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/morpheus-token',

  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/morpheus-token/',

  //     },

  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/crypdawg',
      },
      {
        label: 'Docs',
        href: 'https://morpheusswap.gitbook.io/morpheus-swap/',
      },
      // {
      //   label: 'Discord',
      //   href: 'https://discord.gg/TR7zzfT2ru',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://lydia.medium.com',
      // },
    ],
  },
]

export default config
