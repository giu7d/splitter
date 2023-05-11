import { FlatList, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { HoldItem } from 'react-native-hold-menu'
import colors from 'tailwindcss/colors'

import BillCard from '@/components/fragments/Card/BillCard'
import { trpc } from '@/services/api'

const MENU_ITEMS = [
  {
    text: 'Open',
    icon: () => (
      <Feather name="corner-up-right" color={colors.white} size={18} />
    ),
    onPress: () => {}
  },
  {
    text: 'Share',
    icon: () => <Feather name="share" color={colors.white} size={18} />,
    onPress: () => {}
  },
  {
    text: 'Delete',
    icon: () => <Feather name="trash" color={colors.red[500]} size={18} />,
    isDestructive: true,
    onPress: () => {}
  }
]

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
          <HoldItem items={MENU_ITEMS} hapticFeedback="Medium">
            <BillCard bill={item} />
          </HoldItem>
        </View>
      )}
    />
  )
}
