import { ImageProps } from 'react-native'

import Animated from 'react-native-reanimated'

export default function AvatarProfile(props: ImageProps) {
  return <Animated.Image className="w-16 h-16 rounded-full" {...props} />
}
