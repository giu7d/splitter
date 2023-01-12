import { Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import PillButton from '@/components/fragments/Button/Pill'

import { Card, CardActions, CardHeader } from '.'
import NumberOfSplitBadge from '../Badges/NumberOfSplit'
import RoundedIcons from '../Icons/Rounded'

type Props = {
  bill: Bill
}

function PaidBillCard({ bill }: Props) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <Text className="text-neutral-900 font-semibold text-lg">
          {bill.name}
        </Text>
        <NumberOfSplitBadge
          numberOfSplit={bill.numberOfSplit}
          iconColor={colors.neutral[900]}
          textClassName="text-neutral-900"
        />
      </CardHeader>
      <View className="my-4">
        <Text className="text-neutral-900 text-sm opacity-50 font-semibold">
          Your split
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-end gap-1">
            <Text className="text-neutral-900 text-sm opacity-50 font-semibold pb-1">
              R$
            </Text>
            <Text className="text-neutral-900 text-2xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
          <RoundedIcons className="bg-green-500 h-10 w-10">
            <Feather name="check" color={colors.white} size={20} />
          </RoundedIcons>
        </View>
      </View>
    </Card>
  )
}

function PendingBillCard({ bill }: Props) {
  return (
    <Card className="bg-neutral-900 h-48">
      <CardHeader>
        <Text className="text-white font-semibold text-lg">{bill.name}</Text>
        <NumberOfSplitBadge
          numberOfSplit={bill.numberOfSplit}
          iconColor={colors.white}
          textClassName="text-white"
        />
      </CardHeader>
      <View>
        <Text className="text-white text-sm opacity-50 font-semibold">
          Your split
        </Text>
        <View>
          <View className="flex-row items-end gap-1">
            <Text className="text-white text-sm opacity-50 font-semibold pb-1">
              R$
            </Text>
            <Text className="text-white text-2xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
        </View>
      </View>
      <CardActions>
        <PillButton>Pay</PillButton>
      </CardActions>
    </Card>
  )
}

export default function Bill(props: Props) {
  if (props.bill.isPayed) return <PaidBillCard {...props} />
  return <PendingBillCard {...props} />
}
