import { FlatList, View } from 'react-native'

import BillCard from '@/components/fragments/Card/BillCard'
import { trpc } from '@/services/api'

export default function ListBills() {
  const { data } = trpc.bills.list.useQuery()

  if (!data) return <></>

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <View className="w-4" />}
      renderItem={({ item }) => (
        <View key={`bill-${item.name}`}>
          <BillCard bill={item} />
        </View>
      )}
    />
  )
}
