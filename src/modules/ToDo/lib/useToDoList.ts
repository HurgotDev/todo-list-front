import { useEffect, useState } from 'react'
import { type ITodoList } from '../../../shared/entities/ITodoList'
import { toDoService } from '../../../shared/services'
import { type IUseToDoList } from '../@types/useToDoList'
import { refreshListEnd } from './context/ToDo.actions'
import { useToDoContext } from './context/ToDo.context'
import { useToDoDispatch } from './context/ToDo.reducer'

const useToDoList = (): IUseToDoList => {
  const [loading, setLoading] = useState<boolean>(false)
  const [toDoList, setToDoList] = useState<ITodoList[]>([])

  const { refresh } = useToDoContext()
  const dispatch = useToDoDispatch()

  const fetchData = async (): Promise<void> => {
    if (!loading) {
      setLoading(true)

      await toDoService.getToDoList()
        .then(res => { setToDoList(res) })
        .finally(() => { setLoading(false) })
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()
  }, [])

  console.log({ refresh })

  useEffect(() => {
    if (refresh) {
      fetchData().then(() => {
        dispatch(refreshListEnd())
      })
        .catch(() => {
          // Code here
        })
    }
  }, [refresh])

  return {
    toDoList,
    loading
  }
}

export default useToDoList
