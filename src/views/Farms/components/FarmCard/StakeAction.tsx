import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from 'trinityhelper'
// import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import useStake from 'hooks/useStake'
// import { useGetApiPrices } from 'state/hooks'
// import { useLpTokenPrice } from 'state/hooks'
import useUnstake from 'hooks/useUnstake'
// import { getBalanceAmount, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { getBalanceNumber, getCorrectedNumber } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  isTokenOnly?: boolean
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenDecimals?: number
  tokenName?: string
  pid?: number
  depositFeeBP?: number
  addLiquidityUrl?: string
  stakedUsd?: BigNumber
  quoteTokenDecimals?: number
  isSpirit?: boolean
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
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

const LPWrapper = styled.div`
  text-align: left;
`


const StakeAction: React.FC<FarmCardActionsProps> = ({
  isTokenOnly,
  tokenDecimals,
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  depositFeeBP,
  addLiquidityUrl,
  stakedUsd,
  quoteTokenDecimals,
  isSpirit
}) => {
  const { t } = useTranslation()
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  // const lpPrice = useLpTokenPrice(tokenName)

  const rawStakedBalance = getBalanceNumber(stakedBalance, tokenDecimals);
  const displayBalance = rawStakedBalance.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  })
  // const rawStakedUsd = getBalanceNumber(stakedUsd, 0)
  // const displayBalanceUsd = rawStakedUsd.toLocaleString(undefined, {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // })
  const rawDisplayUsd = getBalanceNumber(stakedUsd, isTokenOnly ? tokenDecimals : quoteTokenDecimals)
  const correctedDisplayUsd = rawDisplayUsd;
  const displayUSD = getCorrectedNumber(correctedDisplayUsd);
  
  
  const [onPresentDeposit] = useModal(
    <DepositModal isTokenOnly={isTokenOnly} max={tokenBalance} onConfirm={onStake} tokenName={tokenName} addLiquidityUrl={addLiquidityUrl} depositFeeBP={depositFeeBP} tokenDecimals={tokenDecimals} />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal isTokenOnly={isTokenOnly} max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} tokenDecimals={tokenDecimals} />,
  )

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <Button onClick={onPresentDeposit}>{t('Stake')}</Button>
    ) : (
      <IconButtonWrapper>
        <IconButton variant="tertiary" onClick={onPresentWithdraw} mr="6px">
          <MinusIcon color="secondary" width="14px" />
        </IconButton>
        <IconButton variant="tertiary" onClick={onPresentDeposit}>
          <AddIcon color="secondary" width="14px" />
        </IconButton>
      </IconButtonWrapper>
    )
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <LPWrapper>
        <Heading color={rawStakedBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
        {/* {rawStakedBalance !== 0 && <Label>~${displayBalanceUsd}</Label>} */}
        {/* {stakedBalance.gt(0) && lpPrice.gt(0) && (
          <Balance
            fontSize="12px"
            color="textSubtle"
            decimals={2}
            value={getBalanceNumber(lpPrice.times(stakedBalance))}
            unit=" USD"
            // prefix="~"
          />
        )} */}

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
      </LPWrapper>

      {renderStakingButtons()}
    </Flex>
  )
}

export default StakeAction
