import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from 'tailwindcss/colors'

type Props = TouchableOpacityProps & {
  children: string
  selected?: boolean
}

export default function TabItem({
  children,
  selected = false,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      className="h-8 w-20 rounded-full justify-center items-center"
      {...props}
    >
      <Text
        className="text-xs font-semibold"
        style={{
          color: selected ? colors.white : colors.neutral[400]
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
