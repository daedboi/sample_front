import { useMemo } from 'react'
import { usePools, useBlock, usePriceBnbBusd, usePriceCakeBusd, usePricePillsMim, useFarmsData } from 'state/hooks';
import partition from 'lodash/partition'
import { QuoteToken } from 'config/constants/types'
import { getBalanceNumber } from 'utils/formatBalance'
import { getPoolApr } from 'utils/apr'
// import { useSelector, useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'

export const usePoolsAPR = () => {
	// const [apr, setAPR] = useState(0)
	const pools = usePools(null);
	const { currentBlock } = useBlock()
  	const pillsPrice = usePricePillsMim().toNumber()
  	const openPools = pools.filter(p => !p.isFinished);
	// const [openPools] = useMemo(
	// 	() => partition(pools, (pool) => pool.isFinished || currentBlock > pool.endBlock),
	// 	[currentBlock, pools],
	// )


	const farms = useFarmsData();

	function getFarm(pid) {
		const farm = farms.find((f) => f.pid === pid);
	  	return farm
	}

	function getPriceQuoteToken(pid: number) {
	  const farm = getFarm(pid)
	  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
	}


	const cakePrice = usePriceCakeBusd()
	const ftmPrice = usePriceBnbBusd()

	let totalApr = 0;

	for(let j = 0; j < openPools.length; j++) {
		const pool = openPools[j];
		const { stakingToken, earningToken, totalStaked, tokenPerBlock, correspondingFarmId, usesCakeForPrice } = pool


		const quoteTokenPrice = getPriceQuoteToken(correspondingFarmId)
		const _symbol = earningToken?.symbol?.toUpperCase()
		// const isFinished = pool.isFinished || (Math.max(endBlock - currentBlock, 0) === 0)

		let earningTokenPriceBig = quoteTokenPrice.times(ftmPrice);
		if (_symbol === QuoteToken.WFTM) {
			earningTokenPriceBig = ftmPrice
		} else if (usesCakeForPrice) {
			earningTokenPriceBig = quoteTokenPrice.times(cakePrice)
		} else if (_symbol === QuoteToken.SPELL) {
			earningTokenPriceBig = quoteTokenPrice
		} else if (_symbol === QuoteToken.wMEMO){
			earningTokenPriceBig = quoteTokenPrice;
		}

		const rewardTokenPrice = earningTokenPriceBig.toNumber()

		const apr = getPoolApr(
			pillsPrice,
			rewardTokenPrice,
			getBalanceNumber(totalStaked, stakingToken.decimals),
			parseFloat(tokenPerBlock),
		)

		totalApr += apr;
	}

  return totalApr/openPools.length;
}

export default usePoolsAPR
