import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated'

type Props = {
  controlSharedValue: SharedValue<number>
}

export default function NavigationTabIndicator({ controlSharedValue }: Props) {
  const animatedIndicatorPosition = useAnimatedStyle(() => ({
    left: withSpring(controlSharedValue.value, {
      damping: 20
    })
  }))

  return (
    <Animated.View
      className="w-12 h-0.5 bg-black"
      style={animatedIndicatorPosition}
    />
  )
}
