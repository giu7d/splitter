import { Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import Button from '@/components/fragments/Button'

import { Card, CardActions, CardHeader } from '.'
import NumberOfSplitBadge from '../Badges/NumberOfSplit'
import RoundedIcons from '../Icons/Rounded'

type Props = {
  bill: Bill
}

function PaidBillCard({ bill }: Props) {
  return (
    <Card className="bg-white h-52">
      <CardHeader>
        <Text className="text-neutral-900 font-semibold text-xl">
          {bill.name}
        </Text>
        <NumberOfSplitBadge
          numberOfSplit={bill.numberOfSplit}
          iconColor={colors.neutral[900]}
          textClassName="text-neutral-900"
        />
      </CardHeader>
      <View>
        <Text className="text-neutral-900 text-sm opacity-50 font-semibold">
          Your split
        </Text>
        <View>
          <View className="flex-row items-end gap-1">
            <Text className="text-neutral-900 text-sm opacity-50 font-semibold pb-1">
              R$
            </Text>
            <Text className="text-neutral-900 text-3xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
        </View>
      </View>
      <CardActions>
        <RoundedIcons className="bg-green-500 h-10 w-10 ">
          <Feather name="check" color={colors.white} size={24} />
        </RoundedIcons>
      </CardActions>
    </Card>
  )
}

function PendingBillCard({ bill }: Props) {
  return (
    <Card className="bg-neutral-900 h-52">
      <CardHeader>
        <Text className="text-white font-semibold text-xl">{bill.name}</Text>
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
            <Text className="text-white text-3xl font-bold">
              {bill.splitValue}
            </Text>
          </View>
        </View>
      </View>
      <CardActions>
        <Button>Pay</Button>
      </CardActions>
    </Card>
  )
}

export default function Bill(props: Props) {
  if (props.bill.isPayed) return <PaidBillCard {...props} />
  return <PendingBillCard {...props} />
}
