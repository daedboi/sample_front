// eslint-disable-next-line
import { Nft, NftSource, NftType } from './types'

export const IPFS_GATEWAY = 'https://gateway.pinata.cloud'

export const nftSources: NftSource = {
  [NftType.LYDIA]: {
    address: {
      250: '',
    },
    identifierKey: 'image',
  },
}

const Nfts: Nft[] = []

export default Nfts
