import styled from 'styled-components'
import { Card } from 'trinityhelper'

const StyledCard = styled(Card)`
  max-width: 100%;
  margin: 0 8px 24px;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  display: flex;
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 0px 2px #f9d92e;
  flex-direction: column;
  align-self: baseline;
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
`

export default StyledCard
