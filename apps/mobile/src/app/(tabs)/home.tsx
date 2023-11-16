import { View } from 'react-native'

import { useRouter } from 'expo-router'

import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import ListSplits from '@/components/container/Splits/ListSplits'
import Template from '@/components/templates'
import useAnimatedScreenScroll from '@/hooks/useAnimatedScreenScroll'
import { trpc } from '@/services/api'

export default function Home() {
  const router = useRouter()
  const scroll = useAnimatedScreenScroll()
  const bills = trpc.bills.list.useQuery()

  const handleRefetchBills = async () => {
    await new Promise((resolve) =>
      setTimeout(() => bills.refetch().finally(() => resolve('')), 1000)
    )
  }

  return (
    <View testID="home-screen">
      <Template.Page.Root
        onRefresh={handleRefetchBills}
        onScroll={scroll.handleScroll}
        renderBefore={
          <Template.Page.LargeAppBar sharedOffsetValue={scroll.offset} />
        }
      >
        <FilterBills />
        <ListSplits />
        <ListBills onOpenBill={(bill) => router.push(`/bills/${bill.id}`)} />
      </Template.Page.Root>
    </View>
  )
}
