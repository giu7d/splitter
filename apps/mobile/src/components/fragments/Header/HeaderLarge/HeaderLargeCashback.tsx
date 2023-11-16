import { NativeScrollPoint, View } from 'react-native'

import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

import Badge from '@/components/fragments/Badge'
import { linearInterpolation } from '@/services/utils/animation'

const OFFSET_THRESHOLD = [0, 200]
const OPACITY_RANGE = [1, 0]
const OPACITY_INVERTED_RANGE = [0, 1]
const POSITION_RANGE = [-50, 0]

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

  const animatedCashbackSmallStyle = useAnimatedStyle(() => {
    const offsetY = sharedOffsetValue?.value.y ?? 0
    const top = linearInterpolation(offsetY, OFFSET_THRESHOLD, POSITION_RANGE)
    const opacity = linearInterpolation(
      offsetY,
      OFFSET_THRESHOLD,
      OPACITY_INVERTED_RANGE
    )

    return {
      top,
      opacity
    }
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
