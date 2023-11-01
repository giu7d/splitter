import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'
import { Bill } from 'splitter-api/src/entities/bill'

import Avatar from '@/components/fragments/Avatar'
import Badge from '@/components/fragments/Badge'
import Card from '@/components/fragments/Card'
import Text from '@/components/fragments/Text'
import { trpc } from '@/services/api'
import { BILL_STATUS } from '@/services/constants'

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
                statusClassName={BILL_STATUS[item.status].statusClassName}
              >
                {BILL_STATUS[item.status].statusContent}
              </Badge.SplitStatus>
            </Card.Footer>
          }
          onPress={() => onOpenBill(item)}
        >
          <Card.Content>
            <Text.Default className="text-neutral-800 text-sm opacity-50 font-semibold">
              Your split
            </Text.Default>
            <Text.Price>{item.splitValue}</Text.Price>
            <Avatar.SmallProfileGroup />
          </Card.Content>
        </Card.Root>
      )}
    />
  )
}
