import styled from 'styled-components'

export const TextArea = styled.textarea`
  border-radius: 8px;
  width: 100%;
  padding: 0.32rem 0.75rem;
  outline: none;
  min-width: 100%;
  transition: all .2s linear;
  border-color: ${({ theme }) => theme.colors.light};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
