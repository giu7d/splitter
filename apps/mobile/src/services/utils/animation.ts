import {
  Easing,
  Extrapolation,
  SharedValue,
  WithTimingConfig,
  interpolate,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

export const SCROLL_OFFSET_THRESHOLD_RANGE = [0, 200]

export function withLinearInterpolation(
  pivot: number,
  threshold: number[],
  variation: number[]
) {
  'worklet'
  return interpolate(pivot, threshold, variation, Extrapolation.CLAMP)
}

export function withAnimation(...args: Object[]) {
  'worklet'
  return Object.assign({}, ...args)
}

export function withInfinityRepeat(
  sharedValue: SharedValue<number>,
  initialValue: number,
  finalValue: number,
  config: WithTimingConfig
) {
  'worklet'
  return withRepeat(
    withTiming(finalValue, {
      easing: Easing.linear,
      ...config
    }),
    -1,
    false,
    () => (sharedValue.value = initialValue)
  )
}

//
// Animation
//
export function withAnimatedVisibility(
  value: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    opacity: effect(value)
  }
}

export function withAnimatedMarginRight(
  value: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    marginRight: effect(value)
  }
}

export function withAnimatedSquareSize(
  value: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    height: effect(value),
    width: effect(value)
  }
}

export function withAnimatedFontSize(value: number, effect = (e: number) => e) {
  'worklet'
  return {
    fontSize: effect(value)
  }
}

export function withAnimatedTop(value: number, effect = (e: number) => e) {
  'worklet'
  return {
    top: effect(value)
  }
}

export function withAnimatedTransformTranslateX(
  value: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    transform: [{ translateX: effect(value) }]
  }
}
