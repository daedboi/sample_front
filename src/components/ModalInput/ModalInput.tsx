import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js/bignumber'
import { Text, Button, Input, InputProps, Flex } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'

interface ModalInputProps {
  max: string
  symbol: string
  onSelectMax?: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  addLiquidityUrl?: string
  inputTitle?: string
  depositFeeBP?: number
}

const getBoxShadow = ({ isWarning = false, theme }) => {
  if (isWarning) {
    return theme.shadows.warning
  }

  return theme.shadows.inset
}

const StyledTokenInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px 8px 0;
  width: 100%;
`

const StyledInput = styled(Input)`
  box-shadow: none;
  width: 60px;
  margin: 0 8px;
  padding: 0 8px;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 80px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }
`

const StyledErrorMessage = styled(Text)`
  position: absolute;
  bottom: -22px;
  a {
    display: inline;
  }
`
const StyledMaxText = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-end;
`

const ModalInput: React.FC<ModalInputProps> = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
  // addLiquidityUrl,
  inputTitle,
  depositFeeBP = 0
}) => {
  const { t } = useTranslation()
  const isBalanceZero = max === '0' || !max

  const displayBalance = isBalanceZero ? '0' : max

  return (
    <div style={{ position: 'relative' }}>
      <StyledTokenInput isWarning={isBalanceZero}>
        <Flex justifyContent="space-between" pl="16px">
          <Text fontSize="14px">{inputTitle}</Text>
          <Text fontSize="14px">
            {t('Balance')}: {displayBalance.toLocaleString()}
          </Text>
        </Flex>
        <Flex alignItems="flex-end" justifyContent="space-around">
          <StyledInput onChange={onChange} placeholder="0" value={value} />
          <Button scale="sm" onClick={onSelectMax} mr="8px">
            {t('Max')}
          </Button>
          <Text fontSize="16px">{symbol}</Text>
          {/* {depositFeeBP > 0 ? (
          <StyledMaxText>
            {t('Deposit Fee')}: {new BigNumber(value || 0).times(depositFeeBP / 10000).toString()}{' '}
            {symbol}
          </StyledMaxText>
      ) : null} */}
        </Flex>
      </StyledTokenInput>
      {depositFeeBP > 0 ? (
          <StyledMaxText>
            {t('Deposit Fee')}: {new BigNumber(value || 0).times(depositFeeBP / 10000).toString()}{' '}
            {symbol}
          </StyledMaxText>
      ) : null}
      {isBalanceZero && (
        <StyledErrorMessage fontSize="14px" color="failure">
          No tokens to stake!
          {/* <Link fontSize="14px" bold={false} href={addLiquidityUrl} external color="failure">
            {t('get')} {symbol}
          </Link> */}
        </StyledErrorMessage>
      )}
    </div>
  )
}

export default ModalInput
