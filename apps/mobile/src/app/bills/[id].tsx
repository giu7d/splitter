import { View } from 'react-native'

import { useLocalSearchParams } from 'expo-router'

import BaseTemplate from '@/components/templates/Base'
import { trpc } from '@/services/api'

export default function BillsId() {
  const { id } = useLocalSearchParams()

  const bill = trpc.bills.find.useQuery({ id: String(id) })

  if (bill.error) return <View testID="bill-screen"></View>

  if (!bill.data) return <View testID="bill-screen"></View>

  return (
    <BaseTemplate.Root>
      <View testID="bill-screen"></View>
    </BaseTemplate.Root>
  )
}
