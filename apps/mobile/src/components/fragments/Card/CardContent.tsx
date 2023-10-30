import { View } from 'react-native'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function CardContent({ children }: Props) {
  return <View className="my-4 items-center">{children}</View>
}
