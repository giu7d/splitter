import { View } from 'react-native'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
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

  if (!user.data) return <></>

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
            <ListBills />
          </View>
        </BaseTemplate.Root>
      </DrawerTemplate>
    </View>
  )
}
