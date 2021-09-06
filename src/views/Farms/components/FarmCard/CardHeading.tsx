/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from 'victusfinance'
import { CommunityTag, CoreTag, NoFeeTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  targetTokenSymbol?: string
  isTokenOnly?: boolean
  depositFee?: number
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const ImagesWrapper = styled.div`
  width: 100%;
  * {
    border-radius: 30px;
  }
  .target-token-symbol {
    top: -12px;
    left: 16px;
  }
  .token-symbol {
  }
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
  targetTokenSymbol,
  isTokenOnly,
  depositFee,
}) => {
  const tokens = farmImage?.split('-')
  let tokenOnly: boolean;
  if (tokens.length === 1) {
    tokenOnly = true
  }else{
    tokenOnly = false
  }
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">

        {tokenOnly ? (
          <>
            <Image
              src={`/images/tokens/${tokens[0]?.toLowerCase()}.png`}
              alt={farmImage}
              width={58}
              height={58}
            />
          </>   
        ) : (
          <ImagesWrapper>
            <Image
              className="token-symbol"
              key={tokens[0]}
              src={`/images/tokens/${tokens[0]?.toLowerCase()}.png`}
              alt={farmImage}
              width={34}
              height={34}
            />
            <Image
              className="target-token-symbol"
              key={tokens[1]}
              src={`/images/tokens/${tokens[1]?.toLowerCase()}.png`}
              alt={targetTokenSymbol}
              width={42}
              height={42}
            />
          </ImagesWrapper>
          )
        }

      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
        <Flex justifyContent="center">
          {depositFee === 0 ? <NoFeeTag /> : null}
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
