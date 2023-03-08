import type React from 'react'
import { useReducer } from 'react'
import { type IToDoContext } from '../../@types/TodoContext'
import { REFRESH_LIST_ACTION_NAME, REFRESH_LIST_END_ACTION_NAME } from './ToDo.actions'
import { INITIAL_STATE, useTodoDispatchContext } from './ToDo.context'

export function toDoReducer (
  state: IToDoContext = INITIAL_STATE,
  action: { type: string, payload?: any }
): IToDoContext {
  if (action.type === REFRESH_LIST_ACTION_NAME) {
    return {
      ...state,
      refresh: true
    }
  }

  if (action.type === REFRESH_LIST_END_ACTION_NAME) {
    return {
      ...state,
      refresh: false
    }
  }

  return {
    ...state
  }
}

export const useToDoReducer = (): [IToDoContext, React.Dispatch<any>] =>
  useReducer(toDoReducer, INITIAL_STATE)

export const useToDoDispatch = (): React.Dispatch<any> => useTodoDispatchContext()
