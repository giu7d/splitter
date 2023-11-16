import { NativeScrollPoint, TouchableOpacity } from 'react-native'

import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

import { linearInterpolation } from '@/services/utils/animation'

import Avatar from '../../Avatar'

const OFFSET_THRESHOLD = [0, 200]
const SIZE_RANGE = [64, 42]
const MARGIN_RANGE = [24, 8]

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
    const offsetY = sharedOffsetValue?.value.y ?? 0
    const size = linearInterpolation(offsetY, OFFSET_THRESHOLD, SIZE_RANGE)
    const margin = linearInterpolation(offsetY, OFFSET_THRESHOLD, MARGIN_RANGE)

    return {
      marginRight: margin,
      height: size,
      width: size
    }
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar.Profile source={{ uri }} style={animatedImageStyle} />
    </TouchableOpacity>
  )
}
