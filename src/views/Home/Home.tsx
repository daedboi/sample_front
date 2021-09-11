import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from 'trinityhelper'
// import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
// import { useWeb3React } from '@web3-react/core'
// import { usePools } from 'state/hooks'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
// import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import VertStats from './components/VertStats'
// import AutoCompoundingCard from 'views/Home/components/AutoCompoundingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
// import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import WinCard from 'views/Home/components/WinCard'
// import LydStats from 'views/Home/components/LydStats'
import TwitterCard from './components/TwitterCard'
// import Background from '../Background'
// import BridgeCard from './components/BridgeCard'
// import PoolCard from '../Pools/components/PoolCard'
// import LydVaultCard from '../Pools/components/LydVaultCard'
import useDeviceSize from '../../hooks/useWindowSize'


// const Hero = styled.div`
//   align-items: center;
//   background-repeat: no-repeat;
//   background-position: top center;
//   background-size: contain;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   margin: auto;
//   margin-bottom: 32px;
//   text-align: center;

//   ${({ theme }) => theme.mediaQueries.lg} {
//     background-image: url('/images/avalanche.png');
//     background-position: left center, right center;
//     height: 165px;
//     padding-top: 0;
//   }
// `

const Cards = styled(BaseLayout)<{ column: boolean }>`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 20px;
  flex-direction: ${({ column }) => `${column ? 'column' : 'row'}`};
  display: flex;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const MobileSupportCard = styled(BaseLayout)<{ isMobile: boolean }>`
  display: ${({ isMobile }) => `${isMobile ? 'block' : 'none'}`};
`

const DesktopSupportCard = styled(BaseLayout)<{ isMobile: boolean }>`
  display: flex;
  display: ${({ isMobile }) => `${isMobile ? 'none !important' : 'block'}`};
`

const Home: React.FC = () => {
  // const { t } = useTranslation()
  // const { account } = useWeb3React()
  const deviceSize = useDeviceSize()
  const { isMobile } = deviceSize
  // const pools = usePools(account)
  // const autoPool = useMemo(() => pools.find((pool) => pool.sousId === 0), [pools])

  return (
    <>

    <Page>
      <img src="/images/WebBanner.gif" alt="titlebar" className="banner" />
        
      <DesktopSupportCard isMobile={isMobile}>
        <Cards column={isMobile}>
          <Cards column>
            {/* <BridgeCard /> */}
            <FarmStakingCard />
          </Cards>

          <Cards column>
            {/* <AutoCompoundingCard /> */}
            {/* <EarnAPYCard /> */}
            <TwitterCard />
            {/* <TotalValueLockedCard /> */}
          </Cards>
        </Cards>
        <Cards column={isMobile}>
          {/* <LotteryCard /> */}
          <VertStats />
        </Cards>
      </DesktopSupportCard>

      <MobileSupportCard isMobile={isMobile}>
        <Cards column={isMobile}>
          <Cards column>
            {/* <BridgeCard /> */}

            <VertStats />
          </Cards>
          <Cards column>
            {/* <EarnAPYCard /> */}
            <TwitterCard />

            {/* <TotalValueLockedCard /> */}
          </Cards>
        </Cards>
        <Cards column={isMobile}>
          {/* <LotteryCard /> */}
          <FarmStakingCard />
          {/* <AutoCompoundingCard /> */}
        </Cards>
      </MobileSupportCard>
    </Page>
    {/* <Background/> */}

    </>
  )
}
// {/* <EarnAssetCard /> */}
// {/* <WinCard /> */}
// {/* <EarnAssetCard /> */}
// {/* <LotteryCard /> */}

export default Home
