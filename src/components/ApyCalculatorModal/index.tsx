import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, Box } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'
import { calculateTokenEarnedPerThousandDollars, apyModalRoi, CalculateApyNeoPools } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  tokenPrice: number
  apr: number
  linkLabel: string
  linkHref: string
  earningTokenSymbol?: string
  roundingDecimals?: number
  compoundFrequency?: number
  performanceFee?: number
  depositFee?: number
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
  margin-left: 10px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

// const StyledLinkExternal = styled(LinkExternal)`
//   text-decoration: none;
//   font-weight: normal;
//   color: ${({ theme }) => theme.colors.text};
//   display: flex;
//   align-items: center;

//   svg {
//     padding-left: 4px;
//     height: 18px;
//     width: auto;
//     fill: ${({ theme }) => theme.colors.secondary};
//   }
// `

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  tokenPrice,
  apr,
  // linkLabel,
  // linkHref,
  // earningTokenSymbol = 'MORPH',
  // eslint-disable-next-line
  // roundingDecimals = 2,
  // compoundFrequency = 1,
  // performanceFee = 0,
  depositFee,
}) => {
  const { t } = useTranslation()
  const oneThousandDollarsWorthOfToken = 1000 / tokenPrice

  // console.log(apr)

  const farmApy = new BigNumber(apr).times(new BigNumber(100)).toNumber()

  const tokenEarnedPerThousand1D = calculateTokenEarnedPerThousandDollars({ numberOfDays: 1, farmApy, tokenPrice, depositFee })
  const tokenEarnedPerThousand7D = calculateTokenEarnedPerThousandDollars({ numberOfDays: 7, farmApy, tokenPrice, depositFee })
  const tokenEarnedPerThousand30D = calculateTokenEarnedPerThousandDollars({ numberOfDays: 30, farmApy, tokenPrice, depositFee })
  const tokenEarnedPerThousand365D = calculateTokenEarnedPerThousandDollars({ numberOfDays: 365, farmApy, tokenPrice, depositFee })

  return (
    <Modal title="Estimated earnings" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {t('Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {t('Farm')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            Farm + NEO
          </Text>
        </GridItem>
        {/* <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {t('return per')}
          </Text>
        </GridItem> */}
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="#2CA6DF">
            {CalculateApyNeoPools({ baseApr: apr * 100, depostiFee: depositFee, days: 1 })}%
          </Text>
        </GridItem>
        {/* <GridItem>
          <Text>{tokenEarnedPerThousand1D}</Text>
        </GridItem> */}
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: tokenEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfToken })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="#2CA6DF">
            {CalculateApyNeoPools({ baseApr: apr * 100, depostiFee: depositFee, days: 7 })}%
          </Text>
        </GridItem>
        {/* <GridItem>
          <Text>{tokenEarnedPerThousand7D}</Text>
        </GridItem> */}
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({
              amountEarned: tokenEarnedPerThousand30D,
              amountInvested: oneThousandDollarsWorthOfToken,
            })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="#2CA6DF">
            {CalculateApyNeoPools({ baseApr: apr * 100, depostiFee: depositFee, days: 30 })}%
          </Text>
        </GridItem>
        {/* <GridItem>
          <Text>{tokenEarnedPerThousand30D}</Text>
        </GridItem> */}
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({
              amountEarned: tokenEarnedPerThousand365D,
              amountInvested: oneThousandDollarsWorthOfToken,
            })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text color="#2CA6DF">
            {CalculateApyNeoPools({ baseApr: apr * 100, depostiFee: depositFee, days: 365 })}%
          </Text>
        </GridItem>
        {/* <GridItem>
          <Text>{tokenEarnedPerThousand365D}</Text>
        </GridItem> */}
      </Grid>
      <Box mb="28px" maxWidth="400px">
        <Text fontSize="14px">
          FARM APY: <br />
          Compound daily farmed PILLS into LP/token.
        </Text>
        <br />
        <Text fontSize="14px" color="#2CA6DF">
          FARM+NEO APY: <br />
          1. Stake PILLS daily into NEO Pools. <br />
          2. Compound Neo Pool rewards into LP/token.
        </Text>
        {false && (
          <Text mt="12px" fontSize="14px" color="textSubtle">
            {t(`All estimated rates take into account this pool's %fee%% deposit fee.`, { fee: depositFee / 100 })}
          </Text>
        )}
      </Box>
      <Text fontSize="12px" bold color="textSubtle" mb="20px" textAlign='center'>
        {t('Calculated based on current rates.')}
      </Text>
      {/* <Flex justifyContent="center">
        <StyledLinkExternal href={linkHref}>{linkLabel}</StyledLinkExternal>
      </Flex> */}
    </Modal>
  )
}

export default ApyCalculatorModal
