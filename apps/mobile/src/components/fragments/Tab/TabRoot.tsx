import { LayoutChangeEvent, View } from 'react-native'

import { SharedValue } from 'react-native-reanimated'

import useLayouts from '@/hooks/useLayouts'

const DEFAULT_PADDING_LEFT = 4

type Data = { id: string; label: string }

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
  const layoutsControl = useLayouts({
    defaultPaddingLeft: DEFAULT_PADDING_LEFT
  })

  const factoryPressHandler = (item: Data) => () => {
    onChange(item)
    layoutsControl.moveTo(item.id)
  }

  return (
    <View className="flex-row bg-neutral-100 p-1 justify-between items-center rounded-2xl">
      {renderIndicator(layoutsControl.currentLayoutPosition)}
      {data.map((item) =>
        renderData({
          item,
          onPress: factoryPressHandler(item),
          onLayout: layoutsControl.factoryLayoutHandler(item.id)
        })
      )}
    </View>
  )
}
