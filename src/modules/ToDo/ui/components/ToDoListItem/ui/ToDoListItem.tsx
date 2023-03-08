import { type FC } from 'react'
import { Button } from '../../../../../../shared/components/common/Button'
import { ItemActions, ItemText, Wrapper } from './styles/ToDoListItem.styled'

export const ToDoListItem: FC = () => {
  return (
    <Wrapper>
      <ItemText>Item</ItemText>
      <ItemActions>
        <Button bType="danger" size="small">X</Button>
      </ItemActions>
    </Wrapper>
  )
}
