import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'
import { Bill } from 'splitter-api/src/entities/bill'

import Card from '@/components/fragments/Card'
import { trpc } from '@/services/api'

type Props = {
  onOpenBill?: (data: Bill) => void
}

export default function ListBills({ onOpenBill = () => {} }: Props) {
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
          renderFooter={<Card.Footer>Your split is unpaid</Card.Footer>}
          onPress={() => onOpenBill(item)}
        >
          <Card.Content>{item.splitValue}</Card.Content>
        </Card.Root>
      )}
    />
  )
}
