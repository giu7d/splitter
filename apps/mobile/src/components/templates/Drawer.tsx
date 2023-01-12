import { useEffect } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'

import {
  PanGestureHandler,
  gestureHandlerRootHOC
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'

import useDrawer from '@/hooks/useDrawer'

const screen = Dimensions.get('screen')

type Props = {
  children: JSX.Element
  drawerComponent: JSX.Element
}

function DrawerTemplate({ children, drawerComponent }: Props) {
  const drawer = useDrawer()

  const drawerAbsoluteY = useSharedValue(screen.height)

  const animatedRootStyles = useAnimatedStyle(() => {
    const scale = drawerAbsoluteY.value / 800
    const minScale = 0.92
    const maxScale = 1

    const isSmallerThanScale = scale <= minScale
    const isBetweenScale = scale >= minScale && scale <= maxScale

    if (isBetweenScale)
      return {
        top: withSpring(25),
        transform: [
          {
            scale
          }
        ]
      }

    if (isSmallerThanScale)
      return {
        top: withSpring(25),
        transform: [
          {
            scale: minScale
          }
        ]
      }

    return {
      top: withSpring(0),
      transform: [
        {
          scale: maxScale
        }
      ]
    }
  })

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
    <View className="bg-black">
      <Animated.View
        className="rounded-3xl overflow-hidden"
        style={animatedRootStyles}
      >
        {children}
      </Animated.View>
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
          <ScrollView className="flex-grow px-6">{drawerComponent}</ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default gestureHandlerRootHOC(DrawerTemplate)
