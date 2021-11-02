import React from 'react'
import styled from 'styled-components'
import { HelpIcon } from 'trinityhelper'
import { useTranslation } from 'contexts/Localization'

import Tooltip from '../Tooltip/Tooltip'

export interface MultiplierProps {
  multiplier: string
}

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 100;
    }
  }
`

const Multiplier: React.FunctionComponent<MultiplierProps> = ({ multiplier }) => {
  const displayMultiplier = multiplier ? multiplier.toLowerCase() : '-'
  const { t } = useTranslation()

  return (
    <Container>
      <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
      <Tooltip
        content={
          <div>
            {t('This percentage represents percent of MORPH emissions directed to the farm/pool.')}
            <br />
            <br />
            {t(
              'MORPH emissions are set to 0.5MORPH/second.',
            )}
          </div>
        }
      >
        <HelpIcon color="textSubtle" />
      </Tooltip>
    </Container>
  )
}

export default Multiplier
