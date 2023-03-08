import type React from 'react'
import { type UseFormRegister } from 'react-hook-form/dist/types'
import { type ITodoList } from '../../../shared/entities/ITodoList'

export interface IUseToDoForm {
  loading: boolean
  register: UseFormRegister<Pick<ITodoList, 'text'>>
  handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any>) => void
}
