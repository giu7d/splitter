import { Text, TouchableOpacity, View } from 'react-native'

export default function FilterBills() {
  return (
    <View className="flex-row bg-neutral-100 p-1 justify-between items-center rounded-full">
      <TouchableOpacity className="bg-neutral-900 h-10 w-24 rounded-full justify-center items-center">
        <Text className="text-white text-sm font-semibold">All</Text>
      </TouchableOpacity>
      <TouchableOpacity className="h-10 w-24 rounded-full  justify-center items-center">
        <Text className="text-neutral-400 text-sm font-semibold">Unpaid</Text>
      </TouchableOpacity>
      <TouchableOpacity className="h-10 w-24 rounded-full  justify-center items-center">
        <Text className="text-neutral-400 text-sm font-semibold">Paid</Text>
      </TouchableOpacity>
    </View>
  )
}
