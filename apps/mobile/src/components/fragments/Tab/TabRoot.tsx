import { useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle, View } from 'react-native'

import { SharedValue, useSharedValue } from 'react-native-reanimated'

const DEFAULT_PADDING_LEFT = 4

type Data = { id: string; label: string }

type Layouts = { [key: string]: LayoutRectangle }

type Props = {
  renderIndicator?: (controlSharedValue: SharedValue<number>) => JSX.Element
  onChange?: (selected: Data) => void
  data: Data[]
  renderData: (props: {
    item: Data
    onPress: () => void
    onLayout: (event: LayoutChangeEvent) => void
  }) => JSX.Element
}

export default function TabRoot({
  data,
  renderData,
  renderIndicator = () => <></>,
  onChange = () => {}
}: Props) {
  const [layouts, setLayouts] = useState<Layouts>({})
  const selectedIndicatorPosition = useSharedValue(DEFAULT_PADDING_LEFT)

  const factoryPressHandler = (item: Data) => () => {
    onChange(item)
    selectedIndicatorPosition.value = layouts[item.id]?.x
  }

  const factoryLayoutHandler = (item: Data) => (event: LayoutChangeEvent) => {
    event.persist()
    setLayouts((state) => ({
      ...state,
      [item.id]: event?.nativeEvent?.layout
    }))
  }

  return (
    <View className="flex-row bg-neutral-100 p-1 justify-between items-center rounded-2xl">
      {renderIndicator(selectedIndicatorPosition)}
      {data.map((item) =>
        renderData({
          item,
          onPress: factoryPressHandler(item),
          onLayout: factoryLayoutHandler(item)
        })
      )}
    </View>
  )
}
