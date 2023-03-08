import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 2px 15px -3px rgba(0,0,0,0.07),0 10px 20px -2px rgba(0,0,0,0.04);

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.md.min}) {
      padding: 2rem;
    }
  `}
`
