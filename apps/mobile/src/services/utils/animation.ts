import { Extrapolation, interpolate } from 'react-native-reanimated'

export function linearInterpolation(
  pivot: number,
  threshold: number[],
  variation: number[]
) {
  'worklet'
  return interpolate(pivot, threshold, variation, Extrapolation.CLAMP)
}
