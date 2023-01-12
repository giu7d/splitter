import { View } from 'react-native'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import Header from '@/components/container/Header'
import PrimaryButton from '@/components/fragments/Button/Primary'
import {
  LinearOpacityBottomContainer,
  LinearOpacityTopContainer
} from '@/components/fragments/Containers/LinearOpacity'
import BaseTemplate from '@/components/templates/Base'
import DrawerTemplate from '@/components/templates/Drawer'
import useDrawer from '@/hooks/useDrawer'
import { trpc } from '@/services/api'

export default function Bills() {
  const drawer = useDrawer()
  const billsQuery = trpc.bills.list.useQuery()

  // TODO: Refactor this
  const handleRefresh = async () => {
    await new Promise((resolve) =>
      setTimeout(() => billsQuery.refetch().finally(() => resolve('')), 1000)
    )
  }

  return (
    <DrawerTemplate drawerComponent={<CreateBill />}>
      <BaseTemplate
        onRefresh={handleRefresh}
        renderHeader={(isCompact) => (
          <LinearOpacityTopContainer>
            <Header isCompact={isCompact} />
            <View className="p-6 pt-4">
              <FilterBills />
            </View>
          </LinearOpacityTopContainer>
        )}
        renderFooter={() => (
          <LinearOpacityBottomContainer className="absolute w-full p-6 pt-9 bottom-0">
            <PrimaryButton onPress={drawer.show}>Create new bill</PrimaryButton>
          </LinearOpacityBottomContainer>
        )}
        scrollViewProps={{
          className: 'gap-6'
        }}
      >
        <View className="px-6 pb-12">
          <ListBills />
        </View>
      </BaseTemplate>
    </DrawerTemplate>
  )
}
