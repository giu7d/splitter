import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

export const useSizeAnimation = (
  condition: boolean,
  from = 64,
  to = 38,
  withTransition = withTiming
) =>
  useAnimatedStyle(() => {
    if (condition)
      return {
        height: withTransition(to),
        width: withTransition(to)
      }

    return {
      height: withTransition(from),
      width: withTransition(from)
    }
  })

export const useMarginRightAnimation = (
  condition: boolean,
  from = 24,
  to = 4,
  withTransition = withTiming
) =>
  useAnimatedStyle(() => {
    if (condition)
      return {
        marginRight: withTransition(to)
      }

    return {
      marginRight: withTransition(from)
    }
  })

export const useVisibilityAnimation = (
  condition: boolean,
  withTransition = withTiming
) =>
  useAnimatedStyle(() => {
    if (condition)
      return {
        opacity: withTransition(0),
        display: 'none'
      }

    return {
      opacity: withTransition(1),
      display: 'flex'
    }
  })

export const useFontSizeAnimation = (
  condition: boolean,
  from = 24,
  to = 16,
  withTransition = withTiming
) =>
  useAnimatedStyle(() => {
    if (condition)
      return {
        fontSize: withTransition(to)
      }

    return {
      fontSize: withTransition(from)
    }
  })

export const useTopAnimation = (
  condition: boolean,
  from = 0,
  to = -50,
  withTransition = withTiming
) =>
  useAnimatedStyle(() => {
    if (condition)
      return {
        top: withTransition(to)
      }

    return {
      top: withTransition(from)
    }
  })
