import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'

import Card from '@/components/fragments/Card'
import { trpc } from '@/services/api'

export default function ListBills() {
  const { data } = trpc.bills.list.useQuery()

  if (!data) return <></>

  return (
    <FlashList
      horizontal
      data={data}
      estimatedItemSize={25}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <View className="w-4" />}
      renderItem={({ item }) => (
        <Card.Root
          key={`bill-${item.name}`}
          renderHeader={<Card.Header icon="🍖">{item.name}</Card.Header>}
          renderFooter={<Card.Footer />}
        >
          <Card.Content>{item.splitValue}</Card.Content>
        </Card.Root>
      )}
    />
  )
}
