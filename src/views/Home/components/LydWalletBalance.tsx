/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Text } from 'trinityhelper'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { BigNumber } from 'bignumber.js'
import { usePriceCakeBusd } from '../../../state/hooks'
import CardValue from './CardValue'
import CardUsdValue from './CardUsdValue'

const LydWalletBalance = () => {
  const [usdtBalance, setUsdtBalance] = useState(0)
  const { t } = useTranslation()
  const lydPrice = usePriceCakeBusd()
  const { balance: lydBalance } = useTokenBalance(getCakeAddress())

  const balanceNumber = getBalanceNumber(lydBalance)
  const { account } = useWeb3React()

  useEffect(() => {
    const _usdtBalance = new BigNumber(balanceNumber).multipliedBy(lydPrice).toNumber()
    setUsdtBalance(_usdtBalance)
  }, [lydBalance, setUsdtBalance, lydPrice])

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={balanceNumber} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardUsdValue key={usdtBalance} value={usdtBalance} />
    </>
  )
}

export default LydWalletBalance
