import { NativeScrollPoint, View } from 'react-native'

import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

import Badge from '@/components/fragments/Badge'
import {
  SCROLL_OFFSET_THRESHOLD_RANGE,
  withAnimatedTop,
  withAnimatedVisibility,
  withAnimation,
  withLinearInterpolation
} from '@/services/utils/animation'

type Props = {
  children: (renderCashbackText: () => JSX.Element) => JSX.Element
  cashbackTotal: string
  sharedOffsetValue?: SharedValue<NativeScrollPoint>
}

export default function HeaderLargeCashback({
  children,
  cashbackTotal,
  sharedOffsetValue
}: Props) {
  const animatedCashbackLargeStyle = useAnimatedStyle(() => {
    const y = sharedOffsetValue?.value.y ?? 0
    return withAnimatedVisibility(
      withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [1, 0])
    )
  })

  const animatedCashbackSmallStyle = useAnimatedStyle(() => {
    const y = sharedOffsetValue?.value.y ?? 0
    return withAnimation(
      withAnimatedVisibility(
        withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [0, 1])
      ),
      withAnimatedTop(
        withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [-50, 0])
      )
    )
  })

  const renderCashbackLargeText = () => (
    <Badge.Cashback
      component={Animated.View}
      style={animatedCashbackLargeStyle}
    >
      {cashbackTotal}
    </Badge.Cashback>
  )

  return (
    <>
      <View className="flex-row items-center justify-start">
        {children(renderCashbackLargeText)}
      </View>
      <Badge.Cashback
        component={Animated.View}
        style={animatedCashbackSmallStyle}
      >
        {cashbackTotal}
      </Badge.Cashback>
    </>
  )
}
