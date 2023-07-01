import { Dimensions, View } from 'react-native'

import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import Animated, {
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming
} from 'react-native-reanimated'

const screen = Dimensions.get('screen')

type Props = {
  children: JSX.Element
  controlledSharedValue: SharedValue<number>
}

export default function DrawerForeground({
  children,
  controlledSharedValue
}: Props) {
  const animatedDrawerForeground = useAnimatedStyle(() => {
    return {
      height: screen.height - controlledSharedValue.value
    }
  })

  const handlePanGestureStateChange = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = controlledSharedValue.value
    },
    onActive: (event: any, _ctx: any) => {
      if (event.absoluteY >= 150)
        controlledSharedValue.value = withSpring(event.absoluteY)
    },
    onEnd: (event) => {
      if (event.absoluteY >= screen.height - 300)
        controlledSharedValue.value = withTiming(screen.height)
    }
  })

  return (
    <PanGestureHandler onHandlerStateChange={handlePanGestureStateChange}>
      <Animated.View
        className="absolute w-full bg-white bottom-0 rounded-t-3xl shadow-lg z-50"
        style={animatedDrawerForeground}
      >
        <View className="h-1 w-8 my-4 rounded-full bg-black self-center opacity-10" />
        <ScrollView className="flex-grow px-6">{children}</ScrollView>
      </Animated.View>
    </PanGestureHandler>
  )
}
