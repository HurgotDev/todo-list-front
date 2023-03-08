import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { type ITodoList } from '../../../shared/entities/ITodoList'
import { toDoService } from '../../../shared/services'
import { type IUseToDoForm } from '../@types/useToDoForm'

const useToDoForm = (): IUseToDoForm => {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit: onSubmit } = useForm<Pick<ITodoList, 'text'>>()

  const handleSubmit = onSubmit((data: Pick<ITodoList, 'text'>): void => {
    if (!loading) {
      setLoading(true)

      toDoService.createToDo(data)
        .then()
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
