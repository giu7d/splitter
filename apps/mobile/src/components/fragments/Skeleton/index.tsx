import { useEffect } from 'react'
import { Dimensions, StyleSheet, View, ViewProps } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export default function Skeleton({ children, ...props }: ViewProps) {
  const width = Dimensions.get('screen').width
  const shimmerXPosition = useSharedValue(0)

  const linearGradientStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      shimmerXPosition.value,
      [0, 1],
      [-width * 2, width * 2],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ translateX }]
    }
  })

  useEffect(() => {
    shimmerXPosition.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
      false,
      () => (shimmerXPosition.value = 0)
    )
  }, [])

  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: '#f0f0f0',
          overflow: 'hidden'
        },
        props.style
      ]}
    >
      <AnimatedLinearGradient
        colors={['#f0f0f0', '#e5e5e5', '#e0e0e0', '#f0f0f0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[StyleSheet.absoluteFill, linearGradientStyle]}
      />
      {children}
    </View>
  )
}
