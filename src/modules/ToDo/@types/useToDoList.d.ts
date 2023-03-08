import { type ITodoList } from '../../../shared/entities/ITodoList'

export interface IUseToDoList {
  toDoList: ITodoList[]
  loading: boolean
}
