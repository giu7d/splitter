import { View } from 'react-native'

import Container from '@/components/fragments/Container'

type Props = {
  renderIndicator: JSX.Element
  children: any
}

export default function NavigationTabRoot({
  children,
  renderIndicator
}: Props) {
  return (
    <Container.LinearOpacity.Bottom className="absolute w-full p-6 px-4 bottom-0">
      {renderIndicator}
      <View className="items-center justify-between flex-row">{children}</View>
    </Container.LinearOpacity.Bottom>
  )
}
