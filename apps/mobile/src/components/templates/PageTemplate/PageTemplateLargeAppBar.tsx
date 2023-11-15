import { View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import Header from '@/components/fragments/Header'
import useScreenScroll from '@/hooks/useScreenScroll'
import { trpc } from '@/services/api'

type Props = {
  children?: JSX.Element
}

export default function PageTemplateLargeAppBar({ children }: Props) {
  const user = trpc.users.find.useQuery({ id: 'my-id' })

  const scroll = useScreenScroll()

  if (!user.data) return <></>

  return (
    <>
      <StatusBar />
      <Header.Large.Root renderAfter={children}>
        <Header.Large.Cashback
          cashbackTotal={user.data.cashback.total}
          controlValue={scroll.isScreenScrolled}
        >
          {(renderCashbackText) => (
            <>
              <Header.Large.ProfileImage
                uri={user.data.photo}
                controlValue={scroll.isScreenScrolled}
              />
              <View className="gap-1">
                <View>
                  <Header.Large.Callout controlValue={scroll.isScreenScrolled}>
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
