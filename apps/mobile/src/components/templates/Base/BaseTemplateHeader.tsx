import { View } from 'react-native'

import { User } from 'splitter-api/src/entities/user'

import Header from '@/components/fragments/Header'
import useScreenScroll from '@/hooks/useScreenScroll'

type Props = {
  data: User
  children: JSX.Element
}

export default function BaseTemplateHeader({ children, data }: Props) {
  const scroll = useScreenScroll()

  return (
    <Header.Large.Root renderExtension={children}>
      <Header.Large.Cashback
        cashbackTotal={data.cashback.total}
        controlValue={scroll.isScreenScrolled}
      >
        {(renderCashbackText) => (
          <>
            <Header.Large.ProfileImage
              uri={data.photo}
              controlValue={scroll.isScreenScrolled}
            />
            <View className="gap-1">
              <View>
                <Header.Large.Callout controlValue={scroll.isScreenScrolled}>
                  {data.firstName} {data.lastName}
                </Header.Large.Callout>
              </View>
              <View>{renderCashbackText()}</View>
            </View>
          </>
        )}
      </Header.Large.Cashback>
    </Header.Large.Root>
  )
}
