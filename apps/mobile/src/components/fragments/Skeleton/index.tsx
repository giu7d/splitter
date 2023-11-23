import { useEffect } from 'react'
import { Dimensions, View, ViewProps } from 'react-native'

import classNames from 'classnames'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

import {
  withAnimatedTransformTranslateX,
  withAnimation,
  withInfinityRepeat,
  withLinearInterpolation
} from '@/services/utils/animation'

const width = Dimensions.get('screen').width

const POSITION_THRESHOLD_RANGE = [0, 1]
const SHIMMER_POSITION_RANGE = [-width * 2, width * 2]

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export default function Skeleton({ children, className, ...props }: ViewProps) {
  const shimmerPosition = useSharedValue(0)

  const linearGradientStyle = useAnimatedStyle(() => {
    return withAnimation(
      withAnimatedTransformTranslateX(
        withLinearInterpolation(
          shimmerPosition.value,
          POSITION_THRESHOLD_RANGE,
          SHIMMER_POSITION_RANGE
        )
      )
    )
  })

  useEffect(() => {
    const config = { duration: 1000 }
    shimmerPosition.value = withInfinityRepeat(shimmerPosition, 0, 1, config)
  }, [])

  return (
    <View
      {...props}
      className={classNames(className, 'overflow-hidden bg-neutral-100')}
    >
      <AnimatedLinearGradient
        className="absolute w-full h-full"
        colors={[
          colors.neutral[100],
          colors.neutral[200],
          colors.neutral[300],
          colors.neutral[200],
          colors.neutral[100]
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={linearGradientStyle}
      />
      {children}
    </View>
  )
}
