/* eslint-disable @typescript-eslint/no-misused-promises */
import { toDoService } from '../../../../../../shared/services'
import { refreshList } from '../../../../lib/context/ToDo.actions'
import { useToDoDispatch } from '../../../../lib/context/ToDo.reducer'
import { type IUseToDoListItem } from '../@types/useToDoListItem'

const useToDoListItem = (): IUseToDoListItem => {
  const dispatch = useToDoDispatch()

  const handleDelete = async (todoId: number): Promise<void> => {
    if (confirm('¿Seguro que desea eliminar este item?')) {
      await toDoService.deleteTodo(todoId)
        .then(() => {
          dispatch(refreshList())
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }

  return {
    handleDelete
  }
}

export default useToDoListItem
