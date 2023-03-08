/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useId, type FC } from 'react'
import useToDoList from '../lib/useToDoList'
import { ToDoListItem } from './components/ToDoListItem'

export const ToDoList: FC = () => {
  const componentId = useId()

  const { toDoList, loading } = useToDoList()

  return (
    <div>
      {
        (!loading && toDoList.length === 0) && (
          <p>No se han encontrado registros</p>
        )
      }
      {
        loading && (
          <p>Cargando...</p>
        )
      }
      {
        toDoList
          .map((item, index) => (
            <ToDoListItem
              key={`${componentId}-todo-list-item-${index}`}
              data={item}
            />
          ))
      }
    </div>
  )
}
