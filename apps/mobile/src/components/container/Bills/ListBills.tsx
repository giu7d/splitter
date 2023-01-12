import { View } from 'react-native'

import BillCard from '@/components/fragments/Card/Bill'
import { trpc } from '@/services/api'

export default function ListBills() {
  const { data } = trpc.bills.list.useQuery()

  if (!data) return <></>

  return (
    <View className="gap-4">
      {data.map((bill) => (
        <View key={`bill-${bill.name}`}>
          <BillCard bill={bill} />
        </View>
      ))}
    </View>
  )
}
