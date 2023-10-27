import { Platform, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { HoldItem } from 'react-native-hold-menu'
import colors from 'tailwindcss/colors'

type Props = {
  children: JSX.Element
  renderHeader?: JSX.Element
  renderFooter?: JSX.Element
}

const MENU_ITEMS = [
  {
    text: 'Open',
    icon: () => (
      <Feather name="corner-up-right" color={colors.white} size={18} />
    ),
    onPress: () => {}
  },
  {
    text: 'Share',
    icon: () => <Feather name="share" color={colors.white} size={18} />,
    onPress: () => {}
  },
  {
    text: 'Delete',
    icon: () => <Feather name="trash" color={colors.red[500]} size={18} />,
    isDestructive: true,
    onPress: () => {}
  }
]

export default function CardRoot({
  children,
  renderHeader,
  renderFooter
}: Props) {
  return (
    <HoldItem hapticFeedback="Medium" items={MENU_ITEMS}>
      <TouchableOpacity
        className="bg-white rounded-3xl shadow-md opacity-90 w-52"
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
    </HoldItem>
  )
}
