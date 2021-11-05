import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import {
  Flex,
  MetamaskIcon,
  Text,
  TooltipText,
  LinkExternal,
  TimerIcon,
  Skeleton,
  useTooltip,
  Button,
} from 'trinityhelper'
import { BASE_AVAX_SCAN_URL, BASE_URL } from 'config'
import { useTimestamp } from 'state/hooks'
import { Pool } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import { registerToken } from 'utils/wallet'
import Balance from 'components/Balance'

interface ExpandedFooterProps {
  pool: Pool
  account: string
  performanceFee?: number
  isAutoVault?: boolean
  totalLydInVault?: BigNumber
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({
  pool,
  account,
  performanceFee = 0,
  isAutoVault = false,
  totalLydInVault,
}) => {
  const { t } = useTranslation()
  const currentBlock = useTimestamp()
  const { stakingToken, earningToken, totalStaked, startBlock, endBlock, isFinished, contractAddress } = pool

  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''
  const poolContractAddress = getAddress(contractAddress)
  // const lydVaultContractAddress = getLydVaultAddress()
  const imageSrc = `${BASE_URL}/images/tokens/${earningToken.symbol.toLowerCase()}.png`
  const isMetaMaskInScope = !!(window as WindowChain).ethereum?.isMetaMask

  const blocksUntilStart = Math.max(startBlock - currentBlock, 0)
  const minutesUntilStart = blocksUntilStart / 60
  const blocksRemaining = Math.max(endBlock - currentBlock, 0)
  const minutesRemaining = blocksRemaining / 60
  const hasPoolStarted = blocksUntilStart === 0 && blocksRemaining > 0
  const shouldShowBlockCountdown = Boolean((!isFinished && blocksRemaining !== 0) && startBlock && endBlock)

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('Subtracted automatically from each yield harvest and burned.'),
    { placement: 'bottom-end' },
  )

  function formatTime(minutes) {
    const days = Math.floor(minutes / 1440);
    const hours = Math.floor(minutes / 60) % 24;
    const formattedMinutes = Math.floor(minutes % 60);
    const showD = days > 0;
    const showH = hours > 0 || showD;
    const showM = formattedMinutes > 0 || showH;
    return `${showD ? `${days}d` : ''} ${showH ? `${hours}h` : ''} ${showM ? `${formattedMinutes}m` : ''}`;
  }

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        <Text small>{t('Total staked:')}</Text>
        <Flex alignItems="flex-start">
          {totalStaked ? (
            <>
              <Balance
                fontSize="14px"
                value={
                  isAutoVault
                    ? getBalanceNumber(totalLydInVault, stakingToken.decimals)
                    : getBalanceNumber(totalStaked, stakingToken.decimals)
                }
              />
              <Text ml="4px" fontSize="14px">
                {stakingToken.symbol}
              </Text>
            </>
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
        </Flex>
      </Flex>
      {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text small>{hasPoolStarted ? t('End') : t('Start')}:</Text>
          <Flex alignItems="center">
            {blocksRemaining || blocksUntilStart ? (
              <Text bold fontSize="14px" color="text" small>
                {hasPoolStarted ? formatTime(minutesRemaining) : formatTime(minutesUntilStart)}
              </Text>
            ) : (
              <Skeleton width="54px" height="21px" />
            )}
            <TimerIcon ml="4px" color="secondary" />
          </Flex>
        </Flex>
      )}
      {/* {!shouldShowBlockCountdown && (
        <Text bold>
          finished
        </Text>
      )} */}
      {isAutoVault && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          {tooltipVisible && tooltip}
          <TooltipText ref={targetRef} small>
            {t('Performance Fee')}
          </TooltipText>
          <Flex alignItems="center">
            <Text ml="4px" small>
              {performanceFee / 100}%
            </Text>
          </Flex>
        </Flex>
      )}
      <Flex mb="2px" justifyContent="flex-end">
        <LinkExternal color="text" bold={false} small href={earningToken.projectLink}>
          {t('View Project Site')}
        </LinkExternal>
      </Flex>
      {poolContractAddress && (
        <Flex mb="2px" justifyContent="flex-end">
          <LinkExternal
            color="text"
            bold={false}
            small
            href={`${BASE_AVAX_SCAN_URL}/address/${poolContractAddress}`}
          >
            {t('View Contract')}
          </LinkExternal>
        </Flex>
      )}
      {account && isMetaMaskInScope && tokenAddress && (
        <Flex justifyContent="flex-end">
          <Button
            variant="text"
            p="0"
            height="auto"
            onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals, imageSrc)}
          >
            <Text color="text" fontSize="14px">
              Add to Metamask
            </Text>
            <MetamaskIcon ml="4px" />
          </Button>
        </Flex>
      )}
    </ExpandedWrapper>
  )
}

export default React.memo(ExpandedFooter)
