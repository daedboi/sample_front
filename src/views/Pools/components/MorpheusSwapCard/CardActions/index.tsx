import BigNumber from 'bignumber.js'
import React from 'react'
import { Flex } from 'trinityhelper'
import ApprovalAction from './ApprovalAction'
import StakeActions from './StakeActions'

interface CardActionsProps {
  maxBalance: BigNumber
  allowance: BigNumber
  stakingTokenPrice: number
}

const CardActions: React.FC<CardActionsProps> = ({ maxBalance, allowance, stakingTokenPrice }) => {
  // Pools using native AVAX behave differently than pools using a token
  const needsApproval = !allowance.gt(0)

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row">
        {needsApproval ? (
          <ApprovalAction />
        ) : (
          <StakeActions
            stakingTokenPrice={stakingTokenPrice}
            maxBalance={maxBalance}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default CardActions
