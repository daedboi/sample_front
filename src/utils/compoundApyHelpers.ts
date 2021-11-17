import usePoolsAPR from "hooks/usePoolsApr"

const roundToTwoDp = (number) => Math.round(number * 100) / 100

export const calculateTokenEarnedPerThousandDollars = ({ numberOfDays, farmApy, tokenPrice, depositFee }) => {
  // Everything here is worked out relative to a year, with the asset compounding daily
  const timesCompounded = 365
  //   We use decimal values rather than % in the math for both APY and the number of days being calculates as a proportion of the year
  const apyAsDecimal = farmApy / 100
  const daysAsDecimalOfYear = numberOfDays / timesCompounded
  //   Calculate the starting LYD balance with a dollar balance of $1000.
  const principal = 1000 / tokenPrice

  const deposit = (10000 - depositFee) / 10000

  // This is a translation of the typical mathematical compounding APY formula. Details here: https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
  const finalAmount = principal * (1 + (apyAsDecimal / timesCompounded) * deposit) ** (timesCompounded * daysAsDecimalOfYear)

  // To get the lyd earned, deduct the amount after compounding (finalAmount) from the starting LYD balance (principal)
  const interestEarned = finalAmount - principal
  return roundToTwoDp(interestEarned)
}

export const apyModalRoi = ({ amountEarned, amountInvested }) => {
  const percentage = (amountEarned / amountInvested) * 100
  return (percentage).toFixed(2)
}

/**
* Calcualte APY based on APR, using strategy to stake PILLS into NEO pools
* and compound rewards back into LP.
* @param value string representation of APR
* @returns APY calcualated based on NEO pool strategy
*/
export const CalculateApyNeoPools = (
  { baseApr, depostiFee, days }) => {
  const apr: number = +baseApr
  const startLpValue = 1000 // can be whatever for simulation
  const neoPoolsAPR = usePoolsAPR();  // neo pools reward APR (TODO change for dynamic)
  // const neoPoolsAPR = 300;
  const pillsPrice = 1  // this price doesn't affect simulation
  const deposit = (10000 - depostiFee) / 10000  // % of tokens which gets deposited
  let lpValue = deposit * startLpValue
  let pillsPerDay = 0
  let pills = 0
  let neoRewardsValue = 0

  for (let day = 0; day < days; day++) {
    neoRewardsValue += pills * pillsPrice * neoPoolsAPR / 36500
    pillsPerDay = lpValue * apr / 100 / 365 / pillsPrice
    pills += pillsPerDay
    lpValue += neoRewardsValue * deposit
    neoRewardsValue = 0
  }

  const sumValue = lpValue + neoRewardsValue + (pills * pillsPrice)
  const profit = sumValue - startLpValue

  const percentage = (profit / startLpValue) * 100
  return (percentage + (100 * (1 - deposit))).toFixed(2)
}


// // TODO:? NEW CALCULATION

export const tokenEarnedPerThousandDollarsCompounding = ({
  numberOfDays,
  farmApr,
  tokenPrice,
  roundingDecimals = 2,
  compoundFrequency = 1,
  performanceFee = 0,
}) => {
  // Everything here is worked out relative to a year, with the asset compounding at the compoundFrequency rate. 1 = once per day
  const timesCompounded = 365 * compoundFrequency
  // We use decimal values rather than % in the math for both APY and the number of days being calculates as a proportion of the year
  let aprAsDecimal = farmApr / 100

  if (performanceFee) {
    // Reduce the APR by the % performance fee
    const feeRelativeToApr = (farmApr / 100) * performanceFee
    const aprAfterFee = farmApr - feeRelativeToApr
    aprAsDecimal = aprAfterFee / 100
  }

  const daysAsDecimalOfYear = numberOfDays / 365
  // Calculate the starting TOKEN balance with a dollar balance of $1000.
  const principal = 1000 / tokenPrice
  // This is a translation of the typical mathematical compounding APY formula. Details here: https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
  const finalAmount = principal * (1 + aprAsDecimal / timesCompounded) ** (timesCompounded * daysAsDecimalOfYear)
  // To get the TOKEN amount earned, deduct the amount after compounding (finalAmount) from the starting TOKEN balance (principal)
  const interestEarned = finalAmount - principal

  return parseFloat(interestEarned.toFixed(roundingDecimals))
}

export const getRoi = ({ amountEarned, amountInvested }) => {
  const percentage = (amountEarned / amountInvested) * 100
  return percentage
}
