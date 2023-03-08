import { toDoService } from '../../../../../../shared/services'
import { type IUseToDoListItem } from '../@types/useToDoListItem'

const useToDoListItem = (): IUseToDoListItem => {
  const handleDelete = async (todoId: number): Promise<void> => {
    await toDoService.deleteTodo(todoId)
  }

  return {
    handleDelete
  }
}

export default useToDoListItem
