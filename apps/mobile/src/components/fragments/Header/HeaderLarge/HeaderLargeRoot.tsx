import { SafeAreaView, View } from 'react-native'

import Container from '@/components/fragments/Container'

type Props = {
  children?: JSX.Element
  renderAfter?: JSX.Element
}

export default function HeaderLargeRoot({ children, renderAfter }: Props) {
  return (
    <Container.LinearOpacity.Top>
      <SafeAreaView>
        <View className="flex-row items-center p-6 py-4 justify-between">
          {children}
        </View>
        {renderAfter}
      </SafeAreaView>
    </Container.LinearOpacity.Top>
  )
}
