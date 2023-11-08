import { useState } from 'react'

import Button from '@/components/fragments/Button'
import NavigationTab from '@/components/fragments/Navigation/NavigationTab'
import useLayouts from '@/hooks/useLayouts'

export const TABS = [
  {
    name: 'home',
    icon: 'inbox'
  },
  {
    name: 'profile',
    icon: 'user'
  },
  {
    name: 'settings',
    icon: 'settings'
  }
]

type Props = {
  tabProps: any
  tabs?: string[]
  onChange?: (tab: string) => void
  onPressNew?: () => void
}

export default function TabBarTemplate({
  tabProps,
  tabs = ['home', 'settings'],
  onPressNew = () => {},
  onChange = () => {}
}: Props) {
  const [tab, setTab] = useState('home')
  const layoutsControl = useLayouts()

  console.log({ tabProps })
  console.log(tabs)

  const handleChangeTap = (newTab: string) => {
    setTab(newTab)
    layoutsControl.moveTo(newTab)
    onChange(newTab)
  }

  return (
    <NavigationTab.Root
      renderIndicator={
        <NavigationTab.Indicator
          controlSharedValue={layoutsControl.currentLayoutPosition}
        />
      }
    >
      {TABS.map((item) => (
        <NavigationTab.Item
          key={`nav-tab-${item.name}`}
          icon={item.icon}
          selected={item.name === tab}
          onLayout={layoutsControl.factoryLayoutHandler(item.name)}
          onPress={() => handleChangeTap(item.name)}
        />
      ))}
      <Button.Primary className="h-12 flex-grow" onPress={onPressNew}>
        New
      </Button.Primary>
    </NavigationTab.Root>
  )
}
