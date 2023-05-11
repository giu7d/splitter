import { TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import Header from '@/components/container/Header'
import PrimaryButton from '@/components/fragments/Button/Primary'
import {
  LinearOpacityBottomContainer,
  LinearOpacityTopContainer
} from '@/components/fragments/Containers/LinearOpacity'
import BaseTemplate from '@/components/templates/Base'
import useDrawer from '@/hooks/useDrawer'
import { trpc } from '@/services/api'

export default function Bills() {
  const drawer = useDrawer()
  const billsQuery = trpc.bills.list.useQuery()

  const handleRefresh = async () => {
    await new Promise((resolve) =>
      setTimeout(() => billsQuery.refetch().finally(() => resolve('')), 1000)
    )
  }

  return (
    <View testID="bill-screen">
      {/* <DrawerTemplate drawerComponent={<CreateBill />}> */}
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
          <LinearOpacityBottomContainer className="absolute w-full p-6 px-4 bottom-3">
            <View className="items-center justify-between flex-row gap-6">
              <TouchableOpacity className="h-12 w-12 justify-center items-center">
                <Feather name="inbox" color={colors.neutral[800]} size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="h-12 w-12 justify-center items-center">
                <Feather name="user" color={colors.neutral[400]} size={24} />
              </TouchableOpacity>
              <TouchableOpacity className="h-12 w-12 justify-center items-center">
                <Feather
                  name="settings"
                  color={colors.neutral[400]}
                  size={24}
                />
              </TouchableOpacity>
              <PrimaryButton onPress={drawer.show} className="h-12 flex-grow">
                New
              </PrimaryButton>
            </View>
          </LinearOpacityBottomContainer>
        )}
        scrollViewProps={{
          className: 'gap-6'
        }}
      >
        <View className="flex-grow h-full pb-20">
          <ListBills />
        </View>
      </BaseTemplate>
      {/* </DrawerTemplate> */}
    </View>
  )
}
