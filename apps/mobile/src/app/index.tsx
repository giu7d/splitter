import { useState } from 'react'
import { View } from 'react-native'

import CreateBill from '@/components/container/Bills/CreateBill'
import FilterBills from '@/components/container/Bills/FilterBills'
import ListBills from '@/components/container/Bills/ListBills'
import Button from '@/components/fragments/Button'
import BaseTemplate from '@/components/templates/Base'
import DrawerTemplate from '@/components/templates/Drawer'
import useDrawer from '@/hooks/useDrawer'
import { trpc } from '@/services/api'
import SplitLiveActivity from '@/services/notifications/splitLiveActivity'

export default function App() {
  const drawer = useDrawer()
  // TODO: REMOVE THIS
  const [randomId, setRandomId] = useState<string>('')
  // TODO: REMOVE THIS
  const [progress, setProgress] = useState<number>(0)

  const user = trpc.users.find.useQuery({ id: 'my-id' })
  const bills = trpc.bills.list.useQuery()

  const handleRefetchBills = async () => {
    await new Promise((resolve) =>
      setTimeout(() => bills.refetch().finally(() => resolve('')), 1000)
    )
  }

  if (!user.data) return <View testID="bill-screen"></View>

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
            {/* TODO: REMOVE THIS */}
            {!randomId && (
              <Button.Primary
                className="m-4"
                onPress={async () => {
                  await SplitLiveActivity.start({
                    title: 'Churras',
                    subtitle: 'Aguardando a galera...',
                    icon: '🍖',
                    progress
                  })
                }}
              >
                Create Activity
              </Button.Primary>
            )}
            {!randomId && (
              <Button.Primary
                className="m-4"
                onPress={async () => {
                  const [activity] = await SplitLiveActivity.listAll()

                  if (!activity) return

                  setRandomId(activity.id)
                }}
              >
                Load Id Activity
              </Button.Primary>
            )}
            {randomId && (
              <Button.Primary
                className="m-4"
                onPress={async () => {
                  setProgress(1)

                  console.log({ randomId, progress })

                  await SplitLiveActivity.update(randomId, {
                    title: 'Churras',
                    subtitle: 'Aguardando a galera...',
                    icon: '🍖',
                    progress: 1
                  })
                }}
              >
                Update Activity
              </Button.Primary>
            )}
            {randomId && (
              <Button.Primary
                className="m-4"
                onPress={async () => {
                  await SplitLiveActivity.end(randomId)
                  setRandomId('')
                  setProgress(0)
                }}
              >
                End Activity
              </Button.Primary>
            )}
            {/* TODO: REMOVE THIS */}
          </View>
        </BaseTemplate.Root>
      </DrawerTemplate>
    </View>
  )
}
