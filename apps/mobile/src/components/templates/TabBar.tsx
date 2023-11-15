import Button from '@/components/fragments/Button'
import Navigation from '@/components/fragments/Navigation'
import useLayouts from '@/hooks/useLayouts'

export const PAGE_ICONS = {
  home: 'inbox',
  profile: 'user',
  settings: 'settings'
}

type PageIconKeys = keyof typeof PAGE_ICONS

type TabStateRoute = { key: string; name: PageIconKeys; params: any }

type TabState = {
  index: number
  routes: TabStateRoute[]
}

type TabNavigation = {
  emit: (...params: any) => any
  navigate: (...params: any) => any
}

type Props = {
  state: TabState
  navigation: TabNavigation
  onPressNew?: () => void
}

export default function TabBarTemplate({
  state,
  navigation,
  onPressNew = () => {}
}: Props) {
  const layoutsControl = useLayouts()

  const handleChangeTab = (route: TabStateRoute, isSelected: boolean) => {
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
            key={`nav-tab-${route.name}`}
            icon={PAGE_ICONS[route.name]}
            selected={isSelected}
            onLayout={layoutsControl.factoryLayoutHandler(route.name)}
            onPress={() => handleChangeTab(route, isSelected)}
          />
        )
      })}
      <Button.Primary className="h-12 flex-grow" onPress={onPressNew}>
        New
      </Button.Primary>
    </Navigation.Tab.Root>
  )
}
