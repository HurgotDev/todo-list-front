import { useId, type FC } from 'react'
import { ToDoListItem } from './components/ToDoListItem'

export const ToDoList: FC = () => {
  const componentId = useId()

  return (
    <div>
      {
        new Array(10).fill(0)
          .map((_, index) => <ToDoListItem key={`${componentId}-todo-list-item-${index}`} />)
      }
    </div>
  )
}
