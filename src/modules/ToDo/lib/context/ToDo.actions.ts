export const REFRESH_LIST_ACTION_NAME = 'toDo/REFRESH_LIST'

export interface IRefreshListAction {
  type: typeof REFRESH_LIST_ACTION_NAME
  payload: boolean
}

export const refreshList = (): IRefreshListAction => ({
  type: REFRESH_LIST_ACTION_NAME,
  payload: true
})

export const REFRESH_LIST_END_ACTION_NAME = 'toDo/REFRESH_LIST_END'

export interface IRefreshListEndAction {
  type: typeof REFRESH_LIST_END_ACTION_NAME
  payload: boolean
}

export const refreshListEnd = (): IRefreshListEndAction => ({
  type: REFRESH_LIST_END_ACTION_NAME,
  payload: false
})
