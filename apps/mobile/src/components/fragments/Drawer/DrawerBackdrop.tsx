import { Dimensions } from 'react-native'

import Animated, {
  SharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

const screen = Dimensions.get('screen')

type Props = {
  controlledSharedValue: SharedValue<number>
  onClose?: () => void
}

export default function DrawerBackdrop({
  controlledSharedValue,
  onClose = () => {}
}: Props) {
  const animatedDrawerBackdrop = useAnimatedStyle(() => {
    const isDrawerHidden = controlledSharedValue.value === screen.height
    if (isDrawerHidden) {
      return {
        display: 'none'
      }
    }

    return {
      display: 'flex'
    }
  })

  return (
    <Animated.View
      className="absolute h-full w-full bg-transparent"
      style={animatedDrawerBackdrop}
      onTouchEnd={onClose}
    />
  )
}
