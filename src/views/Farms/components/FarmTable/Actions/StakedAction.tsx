import React, { useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Button, useModal, IconButton, AddIcon, MinusIcon, Skeleton } from 'trinityhelper'
import { useLocation } from 'react-router-dom'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser } from 'state/hooks'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { useTranslation } from 'contexts/Localization'
import { useApprove } from 'hooks/useApprove'
import { getBep20Contract } from 'utils/contractHelpers'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber, getCorrectedNumber } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import useWeb3 from 'hooks/useWeb3'

import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 12px;
  align: left;
  display: inline;
`

const SciNumber = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  justify-content:center;
  align-items:baseline;
  white-space: pre;
`

const chainId = process.env.REACT_APP_CHAIN_ID
const BASE_TOKEN_LIQUIDITY_URL = `https://info.spookyswap.finance/token`

interface StackedActionProps extends FarmWithStakedValue {
  userDataReady: boolean
  stakedUsd?
}

const Staked: React.FunctionComponent<StackedActionProps> = ({
  pid,
  depositFeeBP,
  lpSymbol,
  lpAddresses,
  quoteToken,
  token,
  userDataReady,
  isTokenOnly,
  stakedUsd
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const web3 = useWeb3()
  const location = useLocation()
  const tokenDecimals = token.decimals
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = token.address[process.env.REACT_APP_CHAIN_ID]
  
  let liquidityUrlPathParts: string;
  let addLiquidityUrl: string;
  if (isTokenOnly) {
    liquidityUrlPathParts = token.address[chainId]
    addLiquidityUrl = `${BASE_TOKEN_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }else{
    liquidityUrlPathParts = getLiquidityUrlPathParts({
      quoteTokenAddress: quoteToken.address,
      tokenAddress: token.address,
    })
    addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  }  

  const rawStakedBalance = getBalanceNumber(stakedBalance, tokenDecimals);
  const displayBalance = rawStakedBalance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  })
  const rawDisplayUsd = getBalanceNumber(stakedUsd, isTokenOnly ? tokenDecimals : quoteToken.decimals)
  const correctedDisplayUsd = rawDisplayUsd;
  const displayUSD = getCorrectedNumber(correctedDisplayUsd);

  const [onPresentDeposit] = useModal(
    <DepositModal isTokenOnly={isTokenOnly} max={tokenBalance} onConfirm={onStake} tokenName={lpSymbol} addLiquidityUrl={addLiquidityUrl} depositFeeBP={depositFeeBP} tokenDecimals={tokenDecimals} />,
  )
  const [onPresentWithdraw] = useModal(<WithdrawModal isTokenOnly={isTokenOnly} max={stakedBalance} onConfirm={onUnstake} tokenName={lpSymbol} tokenDecimals={tokenDecimals} />)

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

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{t('START FARMING')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <UnlockButton width="100%" />
        </ActionContent>
      </ActionContainer>
    )
  }

  if (isApproved) {
    if (stakedBalance.gt(0)) {
      return (
        <ActionContainer>
          <ActionTitles>
            <Title>{lpSymbol} </Title>
            <Subtle>{t('STAKED')}</Subtle>
          </ActionTitles>
          <ActionContent>
            <div>
              <Earned>{displayBalance}</Earned>
            </div>
             <SciNumber>
            {stakedUsd.gt(0) ? <Label>~$
            {displayUSD} 
            {correctedDisplayUsd < 1e-5  && correctedDisplayUsd>0 ? (
              <Label>{'  '}e{correctedDisplayUsd.toExponential(2).split('e')[1].toLocaleString()}</Label>
            ) : (
              null
            )}
            {' '} USD</Label> : null}
            </SciNumber>
            <IconButtonWrapper>
              <IconButton variant="tertiary" onClick={onPresentWithdraw} mr="6px">
                <MinusIcon color="secondary" width="14px" />
              </IconButton>
              <IconButton variant="tertiary" onClick={onPresentDeposit}>
                <AddIcon color="secondary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          </ActionContent>
        </ActionContainer>
      )
    }

    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{t('STAKE')} </Subtle>
          <Title>{lpSymbol}</Title>
        </ActionTitles>
        <ActionContent>
          <Button
            width="100%"
            onClick={onPresentDeposit}
            variant="primary"
            disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
          >
            {t('Stake')}
          </Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataReady) {
    return (
      <ActionContainer>
        <ActionTitles>
          <Subtle>{t('START FARMING')}</Subtle>
        </ActionTitles>
        <ActionContent>
          <Skeleton width={180} marginBottom={28} marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>
        <Subtle>{t('ENABLE FARM')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <Button
          width="100%"
          disabled={requestedApproval || location.pathname.includes('archived')}
          onClick={handleApprove}
          variant="tertiary"
        >
          {t('Enable')}
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default Staked
