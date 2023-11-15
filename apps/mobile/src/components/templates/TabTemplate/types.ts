import { TAB_ICONS } from './constants'

export type TabTemplateTabIconKeys = keyof typeof TAB_ICONS

export type TabTemplateNavigationStateRoute = {
  key: string
  name: TabTemplateTabIconKeys
  params: any
}

export type TabTemplateNavigationState = {
  index: number
  routes: TabTemplateNavigationStateRoute[]
}

export type TabTemplateNavigationFunctions = {
  emit: (...params: any) => any
  navigate: (...params: any) => any
}
