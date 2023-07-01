import { TouchableOpacity } from 'react-native'

import ProfileImage from '@/components/fragments/ProfileImage'
import {
  useMarginRightAnimation,
  useSizeAnimation
} from '@/hooks/utils/useAnimation'

type Props = {
  uri?: string
  controlValue?: boolean
  onPress?: () => void
}

export default function HeaderLargeProfileImage({
  uri,
  controlValue = false,
  onPress = () => {}
}: Props) {
  const animatedProfileImageSize = useSizeAnimation(controlValue)
  const animatedProfileImageMargin = useMarginRightAnimation(controlValue)

  return (
    <TouchableOpacity onPress={onPress}>
      <ProfileImage
        source={{ uri }}
        style={[animatedProfileImageSize, animatedProfileImageMargin]}
      />
    </TouchableOpacity>
  )
}
