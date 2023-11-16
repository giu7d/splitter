import { NativeScrollPoint, TouchableOpacity } from 'react-native'

import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

import {
  SCROLL_OFFSET_THRESHOLD_RANGE,
  withAnimatedMarginRight,
  withAnimatedSquareSize,
  withAnimation,
  withLinearInterpolation
} from '@/services/utils/animation'

import Avatar from '../../Avatar'

type Props = {
  uri?: string
  sharedOffsetValue?: SharedValue<NativeScrollPoint>
  onPress?: () => void
}

export default function HeaderLargeProfileImage({
  uri,
  sharedOffsetValue,
  onPress = () => {}
}: Props) {
  const animatedImageStyle = useAnimatedStyle(() => {
    const y = sharedOffsetValue?.value.y ?? 0
    return withAnimation(
      withAnimatedSquareSize(
        withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [64, 42])
      ),
      withAnimatedMarginRight(
        withLinearInterpolation(y, SCROLL_OFFSET_THRESHOLD_RANGE, [24, 8])
      )
    )
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar.Profile source={{ uri }} style={animatedImageStyle} />
    </TouchableOpacity>
  )
}
