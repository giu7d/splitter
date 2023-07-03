import { View } from 'react-native'

type Props = {
  renderIndicator?: JSX.Element
  children: JSX.Element | JSX.Element[]
}

export default function TabRoot({ renderIndicator, children }: Props) {
  return (
    <View className="flex-row bg-neutral-100 p-1 justify-between items-center rounded-2xl">
      {renderIndicator}
      {children}
    </View>
  )
}
