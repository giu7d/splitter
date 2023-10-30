import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'
import { Bill } from 'splitter-api/src/entities/bill'

import Badge from '@/components/fragments/Badge'
import { status } from '@/components/fragments/Badge/BadgeSplitStatus'
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
          key={`bill-${item.id}`}
          renderHeader={
            <Card.Header icon={item.icon} iconClassName="bg-neutral-50">
              {item.name}
            </Card.Header>
          }
          renderFooter={
            <Card.Footer>
              <Badge.SplitStatus
                statusClassName={status[item.status].statusClassName}
              >
                {status[item.status].statusContent}
              </Badge.SplitStatus>
            </Card.Footer>
          }
          onPress={() => onOpenBill(item)}
        >
          <Card.Content>{item.splitValue}</Card.Content>
        </Card.Root>
      )}
    />
  )
}
