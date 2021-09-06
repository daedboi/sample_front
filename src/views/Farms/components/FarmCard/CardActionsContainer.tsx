import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Flex, Text } from 'victusfinance'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmUser, usePriceCakeBusd } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import useWeb3 from 'hooks/useWeb3'
import { useApprove } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
// import { QuoteToken } from 'config/constants/types'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: number
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
  totalValue?: BigNumber
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl, totalValue }) => {
  const { t } = useTranslation()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, token, depositFeeBP, isTokenOnly } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const tokenAddress = getAddress(token.address)
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const web3 = useWeb3()
  const lydPrice = usePriceCakeBusd()

  const lpContract = useMemo(() => {
    if (isTokenOnly) {
      return getBep20Contract(tokenAddress, web3)
    }
    return getBep20Contract(lpAddress, web3)
  }, [web3, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  let stakedUsd = stakedBalance

  if (totalValue) {
    stakedUsd = stakedUsd.times(new BigNumber(totalValue).div(farm.lpStakedTotal))
  }
  
  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        isTokenOnly={isTokenOnly}
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenDecimals={token.decimals}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
        depositFeeBP={depositFeeBP}
        stakedUsd={stakedUsd}
        quoteTokenDecimals={farm.quoteToken.decimals}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {t('Approve Contract')}
      </Button>
    )
  }

  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          MORPH
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} usdEarnings={lydPrice.multipliedBy(earnings.dividedBy(10 ** 18))} />
      <Flex>
        <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Staked')}
        </Text>
      </Flex>
      {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
