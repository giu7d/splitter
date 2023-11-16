import { NativeScrollPoint, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { SharedValue } from 'react-native-reanimated'

import Header from '@/components/fragments/Header'
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

  if (!user.data) return <></>

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
