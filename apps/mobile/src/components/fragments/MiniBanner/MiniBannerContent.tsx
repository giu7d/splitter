import { View } from 'react-native'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function MiniBannerContent({ children }: Props) {
  return (
    <View className="flex-1 flex-row p-6 items-center justify-between">
      {children}
    </View>
  )
}
