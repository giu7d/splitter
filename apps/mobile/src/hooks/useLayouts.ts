import { useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle } from 'react-native'

import { useSharedValue } from 'react-native-reanimated'

type Layouts = { [key: string]: LayoutRectangle }

type Props = {
  defaultPaddingLeft?: number
}

export default function useLayouts({ defaultPaddingLeft = 0 }: Props = {}) {
  const [layouts, setLayouts] = useState<Layouts>({})
  const currentLayoutPosition = useSharedValue(defaultPaddingLeft)

  const moveTo = (id: string) => {
    currentLayoutPosition.value = layouts[id]?.x
  }

  const factoryLayoutHandler = (id: string) => (event: LayoutChangeEvent) => {
    event.persist()
    setLayouts((state) => ({
      ...state,
      [id]: event?.nativeEvent?.layout
    }))
  }

  return {
    currentLayoutPosition,
    factoryLayoutHandler,
    moveTo
  }
}
