import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated'

type Prop = {
  controlSharedValue: SharedValue<number>
}

export default function TabSelectionIndicator({ controlSharedValue }: Prop) {
  const animatedTabStyles = useAnimatedStyle(() => ({
    left: withSpring(controlSharedValue.value, {
      damping: 20
    })
  }))

  return (
    <Animated.View
      className="absolute bg-neutral-800 h-8 w-20 rounded-full justify-center items-center"
      style={animatedTabStyles}
    />
  )
}
