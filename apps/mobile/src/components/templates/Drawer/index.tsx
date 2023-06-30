import { useEffect } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'

import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'

import useDrawer from '@/hooks/useDrawer'

import DrawerRoot from './DrawerRoot'

const screen = Dimensions.get('screen')

type Props = {
  children: JSX.Element
  drawerComponent: JSX.Element
}

export default function DrawerTemplate({ children, drawerComponent }: Props) {
  const drawer = useDrawer()

  const drawerAbsoluteY = useSharedValue(screen.height)

  const animatedBackdropStyle = useAnimatedStyle(() => {
    const isHidden = drawerAbsoluteY.value === screen.height

    if (isHidden) {
      return {
        display: 'none'
      }
    }

    return {
      display: 'flex'
    }
  })

  const animatedDrawerStyles = useAnimatedStyle(() => {
    return {
      height: screen.height - drawerAbsoluteY.value
    }
  })

  const _onPanHandlerStateChange = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = drawerAbsoluteY.value
    },
    onActive: (event: any, _ctx: any) => {
      if (event.absoluteY >= 150) {
        drawerAbsoluteY.value = withSpring(event.absoluteY)
      }
    },
    onEnd: (event) => {
      if (event.absoluteY >= screen.height - 300) {
        drawerAbsoluteY.value = withTiming(screen.height)
      }
    }
  })

  const handleOpenDrawer = () => {
    drawerAbsoluteY.value = withSpring(screen.height / 8, {
      damping: 15
    })
  }

  const handleCloseDrawer = () => {
    const isHidden = drawerAbsoluteY.value === screen.height
    if (isHidden) drawer.hide()
  }

  useEffect(() => {
    if (drawer.state) handleOpenDrawer()
    handleCloseDrawer()
  }, [drawer.state])

  return (
    <>
      <View className="bg-black">
        <DrawerRoot drawerRootHeightSharedValue={drawerAbsoluteY}>
          {children}
        </DrawerRoot>
        <Animated.View
          className="absolute h-full w-full bg-transparent"
          style={animatedBackdropStyle}
          onTouchEnd={() => {
            drawerAbsoluteY.value = withTiming(screen.height)
            handleCloseDrawer()
          }}
        />
        <PanGestureHandler onHandlerStateChange={_onPanHandlerStateChange}>
          <Animated.View
            className="absolute w-full bg-white bottom-0 rounded-t-3xl shadow-lg z-50"
            style={animatedDrawerStyles}
          >
            <View className="h-1 w-8 my-4 rounded-full bg-black self-center opacity-10" />
            <ScrollView className="flex-grow px-6">
              {drawerComponent}
            </ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </>
  )
}
