import { createContext, type ReactNode, useContext, type FC } from 'react'
import { type IToDoDispatchContext, type IToDoContext } from '../../@types/TodoContext'
import { useToDoReducer } from './ToDo.reducer'

export const INITIAL_STATE: IToDoContext = {
  refresh: false
}

export const ToDoContext = createContext<IToDoContext>(INITIAL_STATE)
export const ToDoDispatchContext = createContext<IToDoDispatchContext>(() => {})

export const ToDoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useToDoReducer()

  return (
    <ToDoContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        {children}
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  )
}

export const useToDoContext = (): IToDoContext => useContext(ToDoContext)
export const useTodoDispatchContext = (): IToDoDispatchContext => useContext(ToDoDispatchContext)
