import { View, ViewProps } from 'react-native'

export default function TabTemplateRoot({ children, ...props }: ViewProps) {
  return (
    <View className="bg-white flex-grow h-full" {...props}>
      {children}
    </View>
  )
}
