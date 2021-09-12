import { useEffect } from 'react'
// import { connectorLocalStorageKey, ConnectorNames } from 'trinityhelper'
import { ConnectorNames } from 'trinityhelper'
import useAuth from 'hooks/useAuth'

const connectorLocalStorageKey = "connectorId"

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

    // Disable eager connect for AVAX Wallet. Currently the AVAX Wallet extension does not inject AvaxChain
    // into the Window object in time causing it to throw an error
    // TODO: Figure out an elegant way to listen for when the AvaxChain object is ready
    if (connectorId) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
