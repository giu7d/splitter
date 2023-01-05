import { useState } from 'react'
import { LayoutRectangle, View } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

import TabItem from './Item'

type Item = { name: string; label: string }

type Layouts = { [key: string]: LayoutRectangle }

type Props = {
  items: Item[]
  selected: string
  onSelect?: (current: string) => void
}

export default function Tab({
  items = [],
  selected,
  onSelect = () => {}
}: Props) {
  const [layouts, setLayouts] = useState<Layouts>({})

  const tabSelectedX = useSharedValue(4)

  const handleSelect = (current: string) => {
    onSelect(current)
    tabSelectedX.value = layouts[current]?.x
  }

  const animatedTabStyles = useAnimatedStyle(() => ({
    left: withSpring(tabSelectedX.value, {
      damping: 15
    })
  }))

  return (
    <View className="flex-row bg-neutral-100 p-1 justify-between items-center rounded-full">
      <Animated.View
        className="absolute bg-neutral-900 h-10 w-24 rounded-full justify-center items-center"
        style={animatedTabStyles}
      />
      {items.map((item) => (
        <TabItem
          key={`tab-item-${item.name}`}
          name={item.name}
          selected={selected}
          onPress={() => handleSelect(item.name)}
          onLayout={(event) => {
            event.persist()
            setLayouts((state) => ({
              ...state,
              [item.name]: event?.nativeEvent?.layout
            }))
          }}
        >
          {item.label}
        </TabItem>
      ))}
    </View>
  )
}
