// eslint-disable-next-line
import React from 'react'
import { Menu as UikitMenu } from 'victusfinance'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import useAuth from 'hooks/useAuth'
import config from './config'
// const { profile } = useProfile()

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { currentLanguage, setLanguage } = useTranslation()
  const { isDark, toggleTheme } = useTheme()
  const cakePrice = usePriceCakeBusd()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      links={config}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePrice}
      profile={null}
      priceLink="https://info.spookyswap.finance/token/0x0789ff5ba37f72abc4d561d00648acadc897b32d"
      {...props}
    />
  )
}

export default Menu
