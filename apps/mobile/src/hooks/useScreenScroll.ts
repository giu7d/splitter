import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

import { useAtom } from 'jotai'

import { isScreenScrolledAtom } from '@/services/states'

const SCROLL_THRESHOLD = 5

export default function useScreenScroll() {
  const [isScreenScrolled, setScreenScrolled] = useAtom(isScreenScrolledAtom)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const isScrolled = event.nativeEvent.contentOffset.y > SCROLL_THRESHOLD
    setScreenScrolled(isScrolled)
  }

  return { isScreenScrolled, handleScroll }
}
