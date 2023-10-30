import { View } from 'react-native'

import { router } from 'expo-router'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import ListSplits from '@/components/container/Splits/ListSplits'
import BaseTemplate from '@/components/templates/Base'
import DrawerTemplate from '@/components/templates/Drawer'
import useDrawer from '@/hooks/useDrawer'
import { trpc } from '@/services/api'

export default function App() {
  const drawer = useDrawer()

  const user = trpc.users.find.useQuery({ id: 'my-id' })
  const bills = trpc.bills.list.useQuery()

  const handleRefetchBills = async () => {
    await new Promise((resolve) =>
      setTimeout(() => bills.refetch().finally(() => resolve('')), 1000)
    )
  }

  if (!user.data || !bills.data) return <View testID="bill-screen"></View>

  return (
    <View testID="bill-screen">
      <DrawerTemplate renderDrawer={<CreateBill />}>
        <BaseTemplate.Root
          onRefresh={handleRefetchBills}
          renderHeader={
            <BaseTemplate.Header data={user.data}>
              <View className="p-6 pt-4">
                <FilterBills />
              </View>
            </BaseTemplate.Header>
          }
          renderFooter={
            <BaseTemplate.Navigation onPressNew={() => drawer.show()} />
          }
        >
          <View className="flex-grow h-full pb-20">
            <ListSplits />
            <ListBills
              onOpenBill={(bill) => router.push(`/bills/${bill.id}`)}
            />
          </View>
        </BaseTemplate.Root>
      </DrawerTemplate>
    </View>
  )
}
