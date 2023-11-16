import { NativeScrollPoint, View } from 'react-native'

import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

import { linearInterpolation } from '@/services/utils/animation'

const OFFSET_THRESHOLD = [0, 200]
const OPACITY_RANGE = [1, 0]
const FONT_RANGE = [18, 14]

type Props = {
  children?: string | string[]
  sharedOffsetValue?: SharedValue<NativeScrollPoint>
}

export default function HeaderLargeCallout({
  children,
  sharedOffsetValue
}: Props) {
  const animatedWelcomeStyle = useAnimatedStyle(() => {
    const offsetY = sharedOffsetValue?.value.y ?? 0
    const opacity = linearInterpolation(
      offsetY,
      OFFSET_THRESHOLD,
      OPACITY_RANGE
    )

    return {
      opacity
    }
  })

  const animatedFullNameStyle = useAnimatedStyle(() => {
    const offsetY = sharedOffsetValue?.value.y ?? 0
    const fontSize = linearInterpolation(offsetY, OFFSET_THRESHOLD, FONT_RANGE)

    return {
      fontSize
    }
  })

  return (
    <View>
      <Animated.Text
        className="text-sm text-neutral-500"
        style={animatedWelcomeStyle}
      >
        Hello
      </Animated.Text>
      <Animated.Text
        className="text-lg capitalize text-neutral-900 opacity-90 font-semibold"
        style={animatedFullNameStyle}
      >
        {children}
      </Animated.Text>
    </View>
  )
}
