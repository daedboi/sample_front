import { InjectedConnector } from '@web3-react/injected-connector'
import { ConnectorNames } from 'victusfinance'
import Web3 from 'web3'

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

export const getLibrary = (provider): Web3 => {
  return provider
}
