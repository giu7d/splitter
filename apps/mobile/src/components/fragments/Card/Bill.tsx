import { Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import Button from '@/components/fragments/Button'

interface Props {
  bill: Bill
}

function PaidBillCard({ bill }: Props) {
  return (
    <View className="bg-white h-56 rounded-3xl p-6 justify-between shadow-md opacity-90">
      <View className="flex-row justify-between items-start">
        <Text className="text-neutral-900 font-semibold text-4xl">
          {bill.name}
        </Text>
        <View className="flex-row gap-1 items-center">
          <Feather name="users" color={colors.neutral[900]} size={14} />
          <Text className="text-neutral-900 font-semibold text-lg">
            {bill.numberOfSplit}
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-neutral-900 text-base opacity-50 font-semibold">
          Your split
        </Text>
        <View>
          <View className="flex-row items-end gap-1">
            <Text className="text-neutral-900 text-base opacity-50 font-semibold pb-1">
              R$
            </Text>
            <Text className="text-neutral-900 text-3xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-end">
        <View className="h-10 w-10 rounded-full bg-green-500 justify-center items-center">
          <Feather name="check" color={colors.white} size={24} />
        </View>
      </View>
    </View>
  )
}

function UnpaidBillCard({ bill }: Props) {
  return (
    <View className="bg-neutral-900 h-56 rounded-3xl p-6 justify-between shadow-md">
      <View className="flex-row justify-between items-start">
        <Text className="text-white font-semibold text-4xl">{bill.name}</Text>
        <View className="flex-row gap-1 items-center">
          <Feather name="users" color={colors.white} size={14} />
          <Text className="text-white font-semibold text-lg">
            {bill.numberOfSplit}
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-white text-base opacity-50 font-semibold">
          Your split
        </Text>
        <View>
          <View className="flex-row items-end gap-1">
            <Text className="text-white text-base opacity-50 font-semibold pb-1">
              R$
            </Text>
            <Text className="text-white text-3xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row justify-end">
        <Button>Pay</Button>
      </View>
    </View>
  )
}

export default function Bill(props: Props) {
  if (props.bill.isPayed) return <PaidBillCard {...props} />

  return <UnpaidBillCard {...props} />
}
