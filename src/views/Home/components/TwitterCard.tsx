import React from 'react'
import { Card, CardBody, Heading } from 'trinityhelper'
// import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
// import { getBalanceNumber } from 'utils/formatBalance'
// import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
// import { getCakeAddress } from 'utils/addressHelpers'
// import CardValue from './CardValue'
// import { useFarms } from '../../../state/hooks'
import useTheme from '../../../hooks/useTheme'


const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  `

// const Row = styled.div`
//   align-items: center;
//   display: flex;
//   font-size: 14px;
//   justify-content: space-between;
//   margin-bottom: 8px;
// `

const TwitterCard = () => {
  const { t } = useTranslation()

  // const { isDark, toggleTheme, theme } = useTheme();
  const { isDark } = useTheme();

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t('Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MorpheusSwap'
          }}
          options={{
            height: '350',
            chrome: "noheader, nofooter",
            width: "500",
            theme: isDark ? 'dark' : 'light'
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
