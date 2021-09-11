import React, { useState, ComponentProps } from 'react'
import BigNumber from 'bignumber.js/bignumber'
import useTheme from 'hooks/useTheme'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import { PieChart } from 'react-minimal-pie-chart'
import { LinearGauge } from '@progress/kendo-react-gauges'
import { Heading } from 'trinityhelper'

const Charts = styled("div")<{isMobile:boolean}>`
  width: 100%;
  display: ${(props)=>props.isMobile?"inline-block":"flex-grid"};
  padding: 2%;
  padding-bottom: 5%;
`

const ChartContainer = styled.div`
  height: 300px;
  min-width: 50%;
  justify-content: space-between;
  padding: 10px;
`

const ChartHeading = styled(Heading)`
  padding: 10px;
`

const VertCharts = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const { theme } = useTheme()
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` }); 
  // const myData = [
  //   { angle: 1.0 / circSupply.div(totalSupply).toNumber(), label: 'Burned', className: 'arc' },
  //   { angle: 1.0 / burnedBalance.div(totalSupply).toNumber(), label: 'Circulating', color: '#000000' },
  // ]
  return (
    <Charts isMobile = {isMobile}>
      <ChartContainer>
        <ChartHeading>MORPH supply</ChartHeading>
        <VertPie
          data={[
            { title: 'Burned', value: burnedBalance.div(totalSupply).toNumber(), color: theme.colors.failure },
            { title: 'Circulating', value: circSupply.div(totalSupply).toNumber(), color: '#30acff' },
          ]}
        />
      </ChartContainer>
      <ChartContainer>
        <ChartHeading>MORPH emission</ChartHeading>
        <VertGauge isMobile={isMobile}/>
      </ChartContainer>
    </Charts>
  )
}

type Props = {
  data: ComponentProps<typeof PieChart>['data']
}

function VertPie(props: Props) {
  const [hovered, setHovered] = useState<number | undefined>(undefined)
  const { data } = props
  const { theme } = useTheme()
  const vertData = data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      }
    }
    return entry
  })

  const lineWidth = 60

  return (
    <PieChart
      style={{
        fontSize: '8px',
      }}
      data={vertData}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={100}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => ((index === hovered && index === 0) ? 6 : 1)}
      animate
      label={({ dataEntry }) => `${dataEntry.title} - ${dataEntry.percentage.toLocaleString(undefined, {maximumFractionDigits:2})}%`}
      labelPosition={80 - lineWidth / 100}
      labelStyle={{
        fill: theme.colors.secondary,
        opacity: 0.75,
        pointerEvents: 'none',
      }}
      onClick={(_, index) => {
        if (index === 0)
          window.open(
            'https://ftmscan.com/token/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d?a=0x000000000000000000000000000000000000dEaD',
            '_blank',
          )
        else if (index === 1)
          window.open(
            'https://ftmscan.com/token/0x0789fF5bA37f72ABC4D561D00648acaDC897b32d#tokenAnalytics',
            '_blank',
          )
      }}
      onMouseOver={(_, index) => {
        setHovered(index)
      }}
      onMouseOut={() => {
        setHovered(undefined)
      }}
    />
  )
}

const VertGauge = (props: any) => {
  const { theme } = useTheme()
  const totalSupply = (useTotalSupply())

  const maxSupply = 2000000
  const {isMobile} = props;
  const style = {
    width: isMobile?'100%':'75%',
    height: '100px',
    display: 'block',
  }
  const linearOptions = {
    pointer: {
      value: getBalanceNumber((totalSupply || new BigNumber(0))),
      color: theme.colors.secondary,
      border: {
        color: theme.colors.secondary,
      },
    },
    scale: {
      vertical: false,
      majorTicks: { color: theme.colors.secondary,  },
      labels: { visible: true, content: (e) => `${parseInt(e.value)/(1000000)}M`, color: theme.colors.secondary },
      min: 0,
      max: maxSupply,
    },
    style,
  }
  return <>
  <LinearGauge {...linearOptions} />
    <ChartHeading>{(100*getBalanceNumber((totalSupply || new BigNumber(0)))/maxSupply).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}% minted</ChartHeading>
  </>
}

export default VertCharts
