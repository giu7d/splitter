import Navigation from '@/components/fragments/Navigation'
import useLayouts from '@/hooks/useLayouts'

import { TAB_ICONS } from './constants'
import type {
  TabTemplateNavigationFunctions,
  TabTemplateNavigationState,
  TabTemplateNavigationStateRoute
} from './types'

type Props = {
  state: TabTemplateNavigationState
  navigation: TabTemplateNavigationFunctions
  renderAfter: JSX.Element
}

export default function TabTemplateNavigation({
  state,
  navigation,
  renderAfter
}: Props) {
  const layoutsControl = useLayouts()

  const handleChangeTab = (
    route: TabTemplateNavigationStateRoute,
    isSelected: boolean
  ) => {
    if (isSelected) return

    layoutsControl.moveTo(route.name)

    navigation.navigate(route.name, route.params)
  }

  return (
    <Navigation.Tab.Root
      renderIndicator={
        <Navigation.Tab.Indicator
          controlSharedValue={layoutsControl.currentLayoutPosition}
        />
      }
    >
      {state.routes.map((route, index) => {
        const isSelected = state.index === index

        return (
          <Navigation.Tab.Item
            testID={`${route.name}-tab`}
            key={`nav-tab-${route.name}`}
            icon={TAB_ICONS[route.name]}
            selected={isSelected}
            onLayout={layoutsControl.factoryLayoutHandler(route.name)}
            onPress={() => handleChangeTab(route, isSelected)}
          />
        )
      })}
      {renderAfter}
    </Navigation.Tab.Root>
  )
}
