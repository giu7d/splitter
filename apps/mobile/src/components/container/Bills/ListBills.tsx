import { View } from 'react-native'

import Bill from '@/components/fragments/Card/Bill'
import { trpc } from '@/services/api'

export default function ListBills() {
  const { data } = trpc.bills.useQuery()

  if (!data) return <></>

  return (
    <View className="gap-4">
      {data.map((bill) => (
        <View key={`bill-${bill.name}`}>
          <Bill bill={bill} />
        </View>
      ))}
    </View>
  )
}
