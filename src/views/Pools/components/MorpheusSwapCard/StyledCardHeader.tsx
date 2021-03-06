import React from 'react'
import { CardHeader, Heading, Text, Flex, Image } from 'trinityhelper'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundAlt : theme.colors.gradients[background]};
`

const StyledCardHeader: React.FC<{
  earningTokenSymbol: string
  stakingTokenSymbol: string
  isAutoVault?: boolean
  isFinished?: boolean
}> = ({ earningTokenSymbol, stakingTokenSymbol, isFinished = false, isAutoVault = false }) => {
  const { t } = useTranslation()
  const poolImageSrc = isAutoVault
    ? `lyd-lydvault.svg`
    : `${earningTokenSymbol}.png`.toLocaleLowerCase()
  const isLydPool = earningTokenSymbol === 'MORPH' && stakingTokenSymbol === 'MORPH'
  const background = isLydPool ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return `${t('Auto')}`
    }
    if (isLydPool) {
      // manual lyd
      return `${t('Manual')}`
    }
    // all other pools
    return `${t('Get')}`
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return `${t('Automatic restaking')}`
    }
    if (isLydPool) {
      return `${t('Earn MORPH, stake MORPH')}`
    }
    return `${t('Swap')} ${stakingTokenSymbol}`
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading color={isFinished ? 'text' : 'text'} scale="lg">
            {`${getHeadingPrefix()} ${earningTokenSymbol}`}
          </Heading>
          <Text color={isFinished ? 'text' : 'text'}>{getSubHeading()}</Text>
        </Flex>
        <Image src={`/images/pools/${poolImageSrc}`} alt={earningTokenSymbol} width={64} height={64} />
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
