import React, { useEffect, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from 'trinityhelper'
import useToast from 'hooks/useToast'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPublicData } from 'state/hooks'
// import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import styled from 'styled-components'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import Swap from './views/Swap'
// import ComingSoon from './views/ComingSoon'
// import Maximus from './views/Maximus'
// import Airdrop from './views/Airdrop'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Ifos = lazy(() => import('./views/Ifos'))
// const Collectibles = lazy(() => import('./views/Collectibles'))
// const Teams = lazy(() => import('./views/Teams'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const Profile = lazy(() => import('./views/Profile'))

let didAskToJoinTelegram = false;

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const DiscordLink = styled.a`
  color: #b1fd00;
`
const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released

  // const { account, connect } = useWallet()
  // useEffect(() => {
  //   if (!account && window.localStorage.getItem('connectorId')) {
  //     connect('injected')
  //   }
  // }, [account, connect])

  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  // useFetchProfile()
  // useFetchPriceList()
  // useGetDocumentTitlePrice()

  const { toastInfo} = useToast()
  const v = Math.random();
  if (v < 0.5 && !didAskToJoinTelegram){
    toastInfo("Have you joined our Discord community?", <DiscordLink href="https://discord.gg/jBrusSrzCp" rel="noreferrer" target="_blank">Join now</DiscordLink>);
  }
  didAskToJoinTelegram = true;

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Farms tokenMode/>
            </Route>
            <Route path="/staking">
              <Pools />
            </Route>
            {/* <Route path="/electrum">
              <Redirect to="/pools" />
            </Route> */}
            {/* <Route path="/maximus">
              <Maximus />
            </Route> */}
            {/* <Route path="/coming-soon">
              <ComingSoon />
            </Route> */}
            {/* <Route path="/airdrop">
              <Airdrop />
            </Route> */}
            {/* <Route path="/lottery">
              <Lottery />
            </Route> */}
            {/* <Route path="/ifo">
              <Ifos />
            </Route> */}
            {/* <Route path="/collectibles">
              <Collectibles />
            </Route> */}
            {/* <Route exact path="/teams">
              <Teams />
            </Route> */}
            {/* Redirect */}
            {/* <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route> */}
            <Route exact strict path="/swap" component={Swap} />
            {/* <Route exact strict path="/liquidity" component={Liquidity} />
            <Route path="/pool">
              <Redirect to="/liquidity" />
            </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      {/* <EasterEgg iterations={2} /> */}
      <ToastListener />
      {/* <GlobalCheckBullHiccupClaimStatus /> */}
    </Router>
  )
}

export default React.memo(App)
