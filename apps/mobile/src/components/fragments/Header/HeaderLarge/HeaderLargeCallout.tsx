import { View } from 'react-native'

import Animated from 'react-native-reanimated'

import {
  useFontSizeAnimation,
  useVisibilityAnimation
} from '@/hooks/utils/useAnimation'

type Props = {
  children?: string | string[]
  controlValue?: boolean
}

export default function HeaderLargeCallout({
  children,
  controlValue = false
}: Props) {
  const animatedFullNameFontSize = useFontSizeAnimation(controlValue)
  const animatedWelcomeVisibility = useVisibilityAnimation(controlValue)

  return (
    <View>
      <Animated.Text
        className="text-sm text-neutral-500"
        style={animatedWelcomeVisibility}
      >
        Hello
      </Animated.Text>
      <Animated.Text
        className="text-lg capitalize text-neutral-900 opacity-90 font-semibold"
        style={animatedFullNameFontSize}
      >
        {children}
      </Animated.Text>
    </View>
  )
}
