import farmsConfig from './farms'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.token.symbol)

export { farmsConfig, communityFarms }
export { default as poolsConfig } from './pools'
// export { default as maximusConfig } from './maximus'
export { default as ifosConfig } from './ifo'

export const startTimeStamp = 1636537227
