import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;;
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
