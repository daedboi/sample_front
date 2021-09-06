/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Card, CardBody, Heading, Text, Flex, MetamaskIcon } from 'victusfinance'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { registerToken } from 'utils/wallet'
import { getCakeAddress } from 'utils/addressHelpers'
import { usePriceCakeBusd } from 'state/hooks'
import CardValue from './CardValue'
import useDeviceSize from '../../../hooks/useWindowSize'

import { TOKEN_PER_BLOCK } from '../../../config/index'

const StyledLydStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const TokenLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`

const LydStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const tokenAddress = getCakeAddress()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokenAddress))
  const lydSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const deviceSize = useDeviceSize()
  const cakePrice = usePriceCakeBusd()
  const { isMobile } = deviceSize

  const imageSrc =
    'https://firebasestorage.googleapis.com/v0/b/photoai-92d2a.appspot.com/o/square_logo_bg.png?alt=media&token=b36d3d12-6cb8-4e83-b555-d9b8402350c6'

  return (
    <StyledLydStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('VICT Stats')}
        </Heading>
        {/* <Row>
          <Text fontSize="14px">{t('Circulating Supply')}</Text>
          {lydSupply && <CardValue fontSize="14px" value={lydSupply} />}
        </Row> */}
        <Row>
          <Text fontSize="14px">{t('Total VICT Supply')}</Text>
          {lydSupply && <CardValue fontSize="14px" value={lydSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total VICT Burned 🔥')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New VICT/block 🕒')}</Text>
          <CardValue fontSize="14px" decimals={0} value={Number(TOKEN_PER_BLOCK)} />
        </Row>

        <Row>
          <Text fontSize="14px">{t('VICT Market Cap 💰')}</Text>
          <CardValue fontSize="14px" decimals={0} prefix="$" value={Number(cakePrice.times(lydSupply))} />
        </Row>

        <Row>
          <Text fontSize="14px">{t('VICT Price 💲')}</Text>
          <Text fontSize="14px">{t(`$${cakePrice?.toFixed(3)}`)}</Text>
        </Row>

        <Flex mb="4px">
          <TokenLink onClick={() => registerToken(tokenAddress, 'VICT', 18, imageSrc)}>Add VICT to Metamask</TokenLink>
          <MetamaskIcon height={15} width={15} ml="4px" />
        </Flex>
      </CardBody>
    </StyledLydStats>
  )
}

export default LydStats
