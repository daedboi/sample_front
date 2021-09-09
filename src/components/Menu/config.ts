import { MenuEntry } from 'trinityhelper'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/pool',
      },
    ],
  },
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
    label: 'Neo Pools',
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
  {
    label: 'Listings',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Spooky Info',
        href: 'https://info.spookyswap.finance/token/0x0789ff5ba37f72abc4d561d00648acadc897b32d',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/lydiafinance',
      // },
      {
        label: 'Docs',
        href: 'https://morpheusswap.gitbook.io/morpheus-swap/',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://lydia.medium.com',
      // },
    ],
  },
]

export default config
