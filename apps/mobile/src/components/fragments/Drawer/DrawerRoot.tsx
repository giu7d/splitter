import { Dimensions } from 'react-native'

import Constants from 'expo-constants'
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming
} from 'react-native-reanimated'

const screen = Dimensions.get('screen')

const SCALE_MIN = 0.92
const SCALE_MAX = 1

const INITIAL_TOP_DIST = 0
const FINAL_TOP_DIST = Constants.statusBarHeight

const INITIAL_BORDER_RADIUS = 0
const FINAL_BORDER_RADIUS = 24

type Props = {
  children: JSX.Element
  controlledSharedValue: SharedValue<number>
}

export default function DrawerRoot({ children, controlledSharedValue }: Props) {
  const animatedDrawerRoot = useAnimatedStyle(() => {
    const currentScale =
      controlledSharedValue.value / (screen.height - Constants.statusBarHeight)

    const isSmallerThanScale = currentScale <= SCALE_MIN

    const isBetweenScale =
      currentScale >= SCALE_MIN && currentScale <= SCALE_MAX

    if (isBetweenScale)
      return {
        borderTopLeftRadius: withTiming(FINAL_BORDER_RADIUS),
        borderTopRightRadius: withTiming(FINAL_BORDER_RADIUS),
        top: withSpring(FINAL_TOP_DIST),
        transform: [
          {
            scale: withSpring(currentScale)
          }
        ]
      }

    if (isSmallerThanScale)
      return {
        borderTopLeftRadius: withTiming(FINAL_BORDER_RADIUS),
        borderTopRightRadius: withTiming(FINAL_BORDER_RADIUS),
        top: withSpring(FINAL_TOP_DIST),
        transform: [
          {
            scale: withSpring(SCALE_MIN)
          }
        ]
      }

    return {
      borderTopLeftRadius: withTiming(INITIAL_BORDER_RADIUS),
      borderTopRightRadius: withTiming(INITIAL_BORDER_RADIUS),
      top: withSpring(INITIAL_TOP_DIST),
      transform: [
        {
          scale: withSpring(SCALE_MAX)
        }
      ]
    }
  })

  return (
    <Animated.View className="overflow-hidden" style={animatedDrawerRoot}>
      {children}
    </Animated.View>
  )
}
