import { View } from 'react-native'

type Props = {
  children: JSX.Element
}

export default function MiniBannerContent({ children }: Props) {
  return <View className="flex-1">{children}</View>
}
