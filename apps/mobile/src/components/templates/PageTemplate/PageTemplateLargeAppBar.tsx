import { NativeScrollPoint, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { SharedValue } from 'react-native-reanimated'

import Header from '@/components/fragments/Header'
import Skeleton from '@/components/fragments/Skeleton'
import { trpc } from '@/services/api'

type Props = {
  children?: JSX.Element
  sharedOffsetValue?: SharedValue<NativeScrollPoint>
}

export default function PageTemplateLargeAppBar({
  children,
  sharedOffsetValue
}: Props) {
  const user = trpc.users.find.useQuery({ id: 'my-id' })

  if (user.isError) return <></>

  if (!user.data)
    return (
      <>
        <StatusBar />
        <Header.Large.Root renderAfter={children}>
          <View className="flex-row gap-6 items-center">
            <Skeleton className="w-16 h-16 rounded-full" />
            <View className="gap-1">
              <Skeleton className="w-[70] h-4 rounded-lg" />
              <Skeleton className="w-[200] h-6 rounded-lg" />
            </View>
          </View>
        </Header.Large.Root>
      </>
    )

  return (
    <>
      <StatusBar />
      <Header.Large.Root renderAfter={children}>
        <Header.Large.Cashback
          cashbackTotal={user.data.cashback.total}
          sharedOffsetValue={sharedOffsetValue}
        >
          {(renderCashbackText) => (
            <>
              <Header.Large.ProfileImage
                uri={user.data.photo}
                sharedOffsetValue={sharedOffsetValue}
              />
              <View className="gap-1">
                <View>
                  <Header.Large.Callout sharedOffsetValue={sharedOffsetValue}>
                    {user.data.firstName} {user.data.lastName}
                  </Header.Large.Callout>
                </View>
                <View>{renderCashbackText()}</View>
              </View>
            </>
          )}
        </Header.Large.Cashback>
      </Header.Large.Root>
    </>
  )
}
