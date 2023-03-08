/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type ITodoList } from '../../../shared/entities/ITodoList'
import { toDoService } from '../../../shared/services'
import { type IUseToDoForm } from '../@types/useToDoForm'
import { refreshList } from './context/ToDo.actions'
import { useToDoDispatch } from './context/ToDo.reducer'

const useToDoForm = (): IUseToDoForm => {
  const [loading, setLoading] = useState(false)

  const { register, reset, handleSubmit: onSubmit } = useForm<Pick<ITodoList, 'text'>>()

  const dispatch = useToDoDispatch()

  const handleSubmit = onSubmit((data: Pick<ITodoList, 'text'>): void => {
    if (!loading) {
      setLoading(true)

      toDoService.createToDo(data)
        .then(() => {
          dispatch(refreshList())

          reset({
            text: ''
          })
        })
        .catch(err => {
          alert(err.message)
        })
        .finally(() => { setLoading(false) })
    }
  })

  return {
    loading,
    register,
    handleSubmit
  }
}

export default useToDoForm
