import {
  GestureResponderEvent,
  Platform,
  TouchableOpacity,
  View
} from 'react-native'

import colors from 'tailwindcss/colors'

type Props = {
  children: JSX.Element
  renderHeader?: JSX.Element
  renderFooter?: JSX.Element
  onPress?: (e: GestureResponderEvent) => void
}

export default function CardRoot({
  children,
  renderHeader,
  renderFooter,
  onPress = () => {}
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-3xl opacity-90 w-52 shadow-md"
      style={
        Platform.OS === 'android' && {
          shadowColor: colors.neutral[400]
        }
      }
    >
      <View className="items-center px-6 py-0">
        {renderHeader}
        {children}
      </View>
      {renderFooter}
    </TouchableOpacity>
  )
}
