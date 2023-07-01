import { View } from 'react-native'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import MainHeader from '@/components/container/Header/Main'
import MainTab from '@/components/container/Tab/Main'
import DrawerTemplate from '@/components/templates/Drawer'
import MainTemplate from '@/components/templates/Main'
import useDrawer from '@/hooks/useDrawer'
import { trpc } from '@/services/api'

export default function Bills() {
  const drawer = useDrawer()
  const billsQuery = trpc.bills.list.useQuery()

  const handleRefetchBills = async () => {
    await new Promise((resolve) =>
      setTimeout(() => billsQuery.refetch().finally(() => resolve('')), 1000)
    )
  }

  return (
    <View testID="bill-screen">
      <DrawerTemplate renderDrawer={<CreateBill />}>
        <MainTemplate
          onRefresh={handleRefetchBills}
          renderHeader={
            <MainHeader>
              <View className="p-6 pt-4">
                <FilterBills />
              </View>
            </MainHeader>
          }
          renderFooter={<MainTab onPressNew={drawer.show} />}
        >
          <View className="flex-grow h-full pb-20">
            <ListBills />
          </View>
        </MainTemplate>
      </DrawerTemplate>
    </View>
  )
}
