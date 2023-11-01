import { View } from 'react-native'

type Props = {
  children: JSX.Element
}

export default function MiniBannerFooter({ children }: Props) {
  return (
    <View
      className="h-10 p-2 items-center justify-center opacity-70 "
      style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
    >
      {children}
    </View>
  )
}
