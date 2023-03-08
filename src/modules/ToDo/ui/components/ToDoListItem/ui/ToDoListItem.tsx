import { type FC } from 'react'
import { type IToDoListItem } from '../@types/ToDoListItem'
import { Button } from '../../../../../../shared/components/common/Button'
import { ItemActions, ItemText, Wrapper } from './styles/ToDoListItem.styled'
import useToDoListItem from '../lib/useToDoListItem'

export const ToDoListItem: FC<IToDoListItem> = ({ data }) => {
  const { handleDelete } = useToDoListItem()

  return (
    <Wrapper>
      <ItemText>{data.text}</ItemText>
      <ItemActions>
        <Button
          bType="danger"
          size="small"
          onClick={() => { handleDelete(data.id) }}
        >
          X
        </Button>
      </ItemActions>
    </Wrapper>
  )
}
