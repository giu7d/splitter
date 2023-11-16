import { NativeScrollPoint, View } from 'react-native'

import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

import {
  SCROLL_OFFSET_THRESHOLD_RANGE,
  withAnimatedFontSize,
  withAnimatedVisibility,
  withLinearInterpolation
} from '@/services/utils/animation'

type Props = {
  children?: string | string[]
  sharedOffsetValue?: SharedValue<NativeScrollPoint>
}

export default function HeaderLargeCallout({
  children,
  sharedOffsetValue
}: Props) {
  const animatedWelcomeStyle = useAnimatedStyle(() => {
    const y = sharedOffsetValue?.value.y ?? 0
    return withAnimatedVisibility(
      withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [1, 0])
    )
  })

  const animatedFullNameStyle = useAnimatedStyle(() => {
    const y = sharedOffsetValue?.value.y ?? 0
    return withAnimatedFontSize(
      withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [18, 14])
    )
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
