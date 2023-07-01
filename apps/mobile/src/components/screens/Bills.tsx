import { View } from 'react-native'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import MainTab from '@/components/container/Tab/Main'
import Header from '@/components/fragments/Header'
import DrawerTemplate from '@/components/templates/Drawer'
import MainTemplate from '@/components/templates/Main'
import useDrawer from '@/hooks/useDrawer'
import useScreenScroll from '@/hooks/useScreenScroll'
import { trpc } from '@/services/api'

export default function Bills() {
  const drawer = useDrawer()
  const scroll = useScreenScroll()
  const userQuery = trpc.users.find.useQuery({ id: 'my-id' })
  const billsQuery = trpc.bills.list.useQuery()

  const handleRefetchBills = async () => {
    await new Promise((resolve) =>
      setTimeout(() => billsQuery.refetch().finally(() => resolve('')), 1000)
    )
  }

  if (!userQuery.data) return <></>

  return (
    <View testID="bill-screen">
      <DrawerTemplate renderDrawer={<CreateBill />}>
        <MainTemplate
          onRefresh={handleRefetchBills}
          renderHeader={
            <Header.Large.Root
              renderExtension={
                <View className="p-6 pt-4">
                  <FilterBills />
                </View>
              }
            >
              <Header.Large.Cashback
                cashbackTotal={userQuery.data.cashback.total}
                controlValue={scroll.isScreenScrolled}
              >
                {(renderCashbackText) => (
                  <>
                    <Header.Large.ProfileImage
                      uri={userQuery.data.photo}
                      controlValue={scroll.isScreenScrolled}
                    />
                    <View className="gap-1">
                      <View>
                        <Header.Large.Callout
                          controlValue={scroll.isScreenScrolled}
                        >
                          {userQuery.data.firstName} {userQuery.data.lastName}
                        </Header.Large.Callout>
                      </View>
                      <View>{renderCashbackText()}</View>
                    </View>
                  </>
                )}
              </Header.Large.Cashback>
            </Header.Large.Root>
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
