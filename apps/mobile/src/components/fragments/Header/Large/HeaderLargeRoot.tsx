import { View } from 'react-native'

import { LinearOpacityTopContainer } from '@/components/fragments/Containers/LinearOpacity'

type Props = {
  children?: JSX.Element
  renderExtension?: JSX.Element
}

export default function HeaderLargeRoot({ children, renderExtension }: Props) {
  return (
    <LinearOpacityTopContainer>
      <View className="flex-row items-center p-6 py-4 justify-between">
        {children}
      </View>
      {renderExtension}
    </LinearOpacityTopContainer>
  )
}
