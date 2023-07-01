import { useEffect } from 'react'
import { Dimensions, View } from 'react-native'

import { useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import Drawer from '@/components/fragments/Drawer'
import useDrawer from '@/hooks/useDrawer'

const screen = Dimensions.get('screen')

const DRAWER_SCREEN_POSITION = 0.8
const DRAWER_DAMPING = 15

type Props = {
  children: JSX.Element
  renderDrawer: JSX.Element
}

export default function DrawerTemplate({ children, renderDrawer }: Props) {
  const drawer = useDrawer()
  const drawerAbsoluteY = useSharedValue(screen.height)
  const isDrawerHidden = drawerAbsoluteY.value >= screen.height

  useEffect(() => {
    if (isDrawerHidden) drawer.hide()
    if (drawer.state) openDrawer()
  }, [drawer.state])

  const openDrawer = () => {
    const drawerPosition = screen.height / (DRAWER_SCREEN_POSITION * 10)
    const config = { damping: DRAWER_DAMPING }

    drawerAbsoluteY.value = withSpring(drawerPosition, config)
  }

  const closeDrawer = () => {
    drawerAbsoluteY.value = withTiming(screen.height)
  }

  return (
    <View className="bg-black">
      <Drawer.Root controlledSharedValue={drawerAbsoluteY}>
        {children}
      </Drawer.Root>
      <Drawer.Backdrop
        controlledSharedValue={drawerAbsoluteY}
        onClose={closeDrawer}
      />
      <Drawer.Foreground controlledSharedValue={drawerAbsoluteY}>
        {renderDrawer}
      </Drawer.Foreground>
    </View>
  )
}
