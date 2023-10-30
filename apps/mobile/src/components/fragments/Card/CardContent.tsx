import { Text, View } from 'react-native'

type Props = {
  children: string
}

export default function CardContent({ children }: Props) {
  return (
    <View className="my-4 items-center">
      <Text className="text-neutral-800 text-sm opacity-50 font-semibold">
        Your split
      </Text>
      <View className="flex-row items-end gap-1">
        <Text className="text-neutral-800 text-sm font-semibold pb-1">R$</Text>
        <Text className="text-neutral-800 text-2xl font-semibold">
          {children}
        </Text>
      </View>
      {/* TODO List participants using bill.participants */}
      <View className="flex-row my-2">
        <View className="bg-red-200 w-5 h-5 rounded-full" />
        <View className="bg-red-400 w-5 h-5 rounded-full -ml-3" />
        <View className="bg-rose-300 w-5 h-5 rounded-full  -ml-3" />
        <View className="bg-neutral-400 w-5 h-5 rounded-full items-center justify-center -ml-3">
          <Text className="text-white text-xs">+4</Text>
        </View>
      </View>
    </View>
  )
}
