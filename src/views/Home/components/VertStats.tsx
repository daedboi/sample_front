import React from 'react'
import { Card, CardBody, Heading, Text, Image } from 'trinityhelper'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
// import { registerToken } from 'utils/wallet'
import { useMediaQuery } from 'react-responsive';
import { getCakeAddress } from 'utils/addressHelpers'
import useTheme from 'hooks/useTheme'
import Divider from 'views/Farms/components/Divider'
import TotalValueLockedCard from './TotalValueLockedCard'
import CardValue from './CardValue'
import { usePriceCakeBusd } from '../../../state/hooks'
import VertCharts from './VertCharts'

const StyledVertStats = styled(Card)<{isMobile:boolean}>`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width:100%;
  ${(props)=>!props.isMobile? "grid-column: span 12 !important;" : ""}
  border-radius:8px;
  
`
const ColumnLayout = styled(CardBody)<{isMobile:boolean}>`
  column-count:${(props)=>props.isMobile?"1":"3"}
`

// const TokenLink = styled.a`
//   font-size: 14px;
//   text-decoration: none;
//   color: ${(props) => props.theme.colors.text};
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 8px;
// `

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Column = styled.div`
  align-items: left;
  display: block;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  
`

const LinkRow = styled.a`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  :hover{
    text-decoration: underline;
  }
`

const LinkedText = styled(Text)`
  display: flexbox;
  white-space:pre;
`


const InvertedImage = styled(Image)`
    filter:invert(100%);
  `

  const StatsHeading = styled(Heading)`
  column-span: all;
  `

  const StatsDivider = styled(Divider)`
    width:80%;
  `

const VertStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const tokenAddress = getCakeAddress()
  const burnedBalance = useBurnedBalance(tokenAddress)
  // const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
  // eslint-disable-next-line
  const isDark = useTheme().isDark;
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` }); 

  const morphPerSec = 0.5;
  
  // const imageSrc = '/images/tokens/morph.png'

  return (
    <StyledVertStats isMobile={isMobile}>
      <ColumnLayout isMobile={isMobile}>
        <StatsHeading scale="xl" mb="24px">
          {t('MORPH Stats')}
        </StatsHeading>
        <Column>
        
          <Row>
            <Text fontSize="14px">{t('Market Cap')}</Text>
            <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
          </Row>
          <Row>
            <Text fontSize="14px">{t('Total Minted')}</Text>
            {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
          </Row>
            <LinkRow target= "_blank" href="https://ftmscan.com/token/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d?a=0x000000000000000000000000000000000000dEaD">
            <LinkedText fontSize="14px">{t('Total Burned')}{"   "}
              {isDark? <InvertedImage width={20} height={20} alt="external link" src="https://img.icons8.com/windows/32/000000/share-arrow-squared.png"/>:
              <Image width={20} height={20} alt="external link" src="https://img.icons8.com/windows/32/000000/share-arrow-squared.png"/>}
            </LinkedText>

            <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
          </LinkRow>
          <Row>
            <Text fontSize="14px">{t('Circulating Supply')}</Text>
            {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
          </Row>
          <Row>
            <Text fontSize="14px">{t('New MORPH/sec')}</Text>
            <Text bold fontSize="14px">{morphPerSec}</Text>
          </Row>
          <Row>
            <Text fontSize="14px">{t('Max Supply')}</Text>
            <Text bold fontSize="14px">2,000,000 MORPH</Text>
          </Row>

          {/* <Flex mb="4px" mt='4px'>
            <TokenLink onClick={() => registerToken(tokenAddress, 'MORPH', 18, imageSrc)}>Add MORPH to Metamask</TokenLink>
            <MetamaskIcon height={15} width={15} ml="4px" />
          </Flex> */}

        </Column>
        <Column>
          <TotalValueLockedCard />
        </Column>
      </ColumnLayout>
      <StatsDivider/>

      <VertCharts/>
    </StyledVertStats>
  )
}

export default VertStats
