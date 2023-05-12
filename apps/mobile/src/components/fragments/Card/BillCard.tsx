import { Platform, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import type { Bill } from 'splitter-api/src/entities/bill'
import colors from 'tailwindcss/colors'

type Props = {
  bill: Bill
}

export default function BillCard({ bill }: Props) {
  return (
    <TouchableOpacity
      className="bg-white rounded-3xl shadow-md opacity-90 w-52"
      style={
        Platform.OS === 'android' && {
          shadowColor: colors.neutral[400]
        }
      }
    >
      <View className="items-center p-6 pb-0">
        <View className="gap-2">
          <View className="h-16 w-16 border border-red-50 bg-red-100 rounded-full items-center justify-center">
            {/* TODO Change bill image using bill.image */}
            <Text className="text-4xl">🍖</Text>
          </View>
          <Text className="text-center font-semibold text-lg text-neutral-800">
            {bill.name}
          </Text>
        </View>
        <View className="my-4 items-center">
          <Text className="text-neutral-800 text-sm opacity-50 font-semibold">
            Your split
          </Text>
          <View className="flex-row items-end gap-1">
            <Text className="text-neutral-800 text-sm font-semibold pb-1">
              R$
            </Text>
            <Text className="text-neutral-800 text-2xl font-semibold">
              {bill.splitValue}
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
      </View>
      {/* TODO Change bill status using bill.status */}
      <View className="border-t border-neutral-200 h-10 items-center justify-center flex-row">
        <View className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
        <Text className="text-xs">Your split is unpaid</Text>
      </View>
    </TouchableOpacity>
  )
}
