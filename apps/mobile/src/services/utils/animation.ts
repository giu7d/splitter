import { Extrapolation, interpolate } from 'react-native-reanimated'

export function linearInterpolation(
  pivot: number,
  threshold: number[],
  variation: number[]
) {
  'worklet'
  return interpolate(pivot, threshold, variation, Extrapolation.CLAMP)
}

export const SCROLL_OFFSET_THRESHOLD_RANGE = [0, 200]

//
// Utils
//
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

//
// Animation
//
export function withAnimatedVisibility(
  opacity: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    opacity: effect(opacity)
  }
}

export function withAnimatedMarginRight(
  size: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    marginRight: effect(size)
  }
}

export function withAnimatedSquareSize(
  size: number,
  effect = (e: number) => e
) {
  'worklet'
  return {
    height: effect(size),
    width: effect(size)
  }
}

export function withAnimatedFontSize(size: number, effect = (e: number) => e) {
  'worklet'
  return {
    fontSize: effect(size)
  }
}

export function withAnimatedTop(top: number, effect = (e: number) => e) {
  'worklet'
  return {
    top: effect(top)
  }
}
