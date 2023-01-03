import { Dispatch, createContext, useContext, useReducer } from 'react'

const initialState = false

enum DrawerAction {
  SHOW_DRAWER = 'SHOW_DRAWER',
  HIDE_DRAWER = 'HIDE_DRAWER'
}

const reducer = (
  state: boolean,
  action: {
    type: DrawerAction
  }
) => {
  switch (action.type) {
    case DrawerAction.SHOW_DRAWER:
      return true

    case DrawerAction.HIDE_DRAWER:
      return false

    default:
      return state
  }
}

const showDrawer = () => {
  return {
    type: DrawerAction.SHOW_DRAWER
  }
}

const hideDrawer = () => {
  return {
    type: DrawerAction.HIDE_DRAWER
  }
}

const DrawerContext = createContext<[state: boolean, dispatch: Dispatch<any>]>([
  initialState,
  () => {}
])

export function DrawerProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DrawerContext.Provider value={[state, dispatch]}>
      {children}
    </DrawerContext.Provider>
  )
}

export default function useDrawer() {
  const [state, dispatch] = useContext(DrawerContext)

  const show = () => dispatch(showDrawer())

  const hide = () => dispatch(hideDrawer())

  return { state, show, hide }
}
