import { View } from 'react-native'

type Props = {
  children: JSX.Element
  statusClassName?: string
}

export default function CardFooter({ children }: Props) {
  return (
    <View className="border-t border-neutral-200 h-10 items-center justify-center flex-row">
      {children}
    </View>
  )
}
