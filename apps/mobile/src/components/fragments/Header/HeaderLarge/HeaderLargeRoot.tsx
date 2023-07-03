import { View } from 'react-native'

import Container from '@/components/fragments/Container'

type Props = {
  children?: JSX.Element
  renderExtension?: JSX.Element
}

export default function HeaderLargeRoot({ children, renderExtension }: Props) {
  return (
    <Container.LinearOpacity.Top>
      <View className="flex-row items-center p-6 py-4 justify-between">
        {children}
      </View>
      {renderExtension}
    </Container.LinearOpacity.Top>
  )
}
