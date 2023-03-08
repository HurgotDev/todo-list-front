import styled, { css } from 'styled-components'
import { type IButton } from '../@types/Button'

export const Button = styled.button<IButton>`
    text-transform: uppercase;
    vertical-align: bottom;
    border: 0;
    border-radius: 0.25rem;
    transition: all .2s linear;
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 8px 9px -4px rgb(59 113 202 / 30%), 0 4px 18px 0 rgb(59 113 202 / 20%);
    }

    ${({ size }) => {
      if (size === 'small') {
        return css`
          padding: 4px 8px;
        `
      }

      return css`
        padding: 12px 14px;
      `
    }}

    ${({ theme, bType }) => {
      if (bType === 'primary') {
        return css`
          box-shadow: 0 4px 9px -4px ${({ theme }) => theme.colors.primary};
          background: ${theme.colors.primary};
          color: white;
        `
      }

      if (bType === 'danger') {
        return css`
          box-shadow: 0 4px 9px -4px ${({ theme }) => theme.colors.error};
          background: ${theme.colors.error};
          color: white;
        `
      }

      return css`
        box-shadow: 0 4px 9px -4px ${({ theme }) => theme.colors.light};
        background: ${theme.colors.light};
      `
    }}
`
