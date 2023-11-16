import {
  useAnimatedScrollHandler,
  useSharedValue
} from 'react-native-reanimated'

export default function useAnimatedScreenScroll() {
  const offset = useSharedValue({ x: 0, y: 0 })

  const handleScroll = useAnimatedScrollHandler((event) => {
    offset.value = event.contentOffset
  })

  return { offset, handleScroll }
}
