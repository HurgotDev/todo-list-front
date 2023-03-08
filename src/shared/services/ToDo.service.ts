import { type ITodoList } from '../entities/ITodoList'
import client from './client.axios'

export class ToDoService {
  async createToDo (data: Pick<ITodoList, 'text'>): Promise<ITodoList[]> {
    return await client.post('/todo-list', data).then(res => res.data)
  }

  async deleteTodo (todoId: number): Promise<ITodoList[]> {
    return await client.delete(`/todo-list/${todoId}`)
      .then(res => res.data)
  }

  async getToDoList (): Promise<ITodoList[]> {
    return await client.get('/todo-list').then(res => res.data)
  }
}
