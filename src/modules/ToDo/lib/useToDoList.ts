import { useEffect, useState } from 'react'
import { type ITodoList } from '../../../shared/entities/ITodoList'
import { toDoService } from '../../../shared/services'
import { type IUseToDoList } from '../@types/useToDoList'

const useToDoList = (): IUseToDoList => {
  const [loading, setLoading] = useState<boolean>(false)
  const [toDoList, setToDoList] = useState<ITodoList[]>([])

  const fetchData = (): void => {
    if (!loading) {
      setLoading(true)

      toDoService.getToDoList()
        .then(res => { setToDoList(res) })
        .finally(() => { setLoading(false) })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    toDoList,
    loading
  }
}

export default useToDoList
