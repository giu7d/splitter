import { Text, View } from 'react-native'

type Props = {
  icon: string
  children: string
}

export default function CardHeader({ children, icon }: Props) {
  return (
    <View className="pt-6">
      <View className="gap-2">
        <View className="h-16 w-16 border border-red-50 bg-red-100 rounded-full items-center justify-center">
          <Text className="text-4xl">{icon}</Text>
        </View>
        <Text className="text-center font-semibold text-lg text-neutral-800">
          {children}
        </Text>
      </View>
    </View>
  )
}
