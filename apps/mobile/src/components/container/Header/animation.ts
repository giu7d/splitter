import {
  useFontSizeAnimation,
  useMarginRightAnimation,
  useSizeAnimation,
  useTopAnimation,
  useVisibilityAnimation
} from '@/hooks/utils/useAnimation'

export function createAnimation(condition: boolean) {
  return {
    image: [useSizeAnimation(condition), useMarginRightAnimation(condition)],
    text: useFontSizeAnimation(condition),
    hidden: useVisibilityAnimation(condition),
    visibleWhenCompacted: [
      useVisibilityAnimation(!condition),
      useTopAnimation(!condition)
    ]
  }
}
