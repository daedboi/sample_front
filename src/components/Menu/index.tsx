// eslint-disable-next-line
import React from 'react'
import { Menu as UikitMenu } from 'trinityhelper'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePricePillsMim } from 'state/hooks'
import useAuth from 'hooks/useAuth'
import config from './config'
// const { profile } = useProfile()

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { currentLanguage, setLanguage } = useTranslation()
  const { isDark, toggleTheme } = useTheme()
  const pillsPrice = usePricePillsMim()

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
      cakePriceUsd={pillsPrice}
      profile={null}
      priceLink="https://morpheusswap.app/"
      {...props}
    />
  )
}

export default Menu
