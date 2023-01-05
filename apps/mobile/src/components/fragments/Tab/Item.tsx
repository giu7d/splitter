import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from 'tailwindcss/colors'

type Props = TouchableOpacityProps & {
  children: string
  name: string
  selected: string
}

export default function TabItem({ children, name, selected, ...props }: Props) {
  return (
    <TouchableOpacity
      className="h-10 w-24 rounded-full justify-center items-center"
      {...props}
    >
      <Text
        className="text-sm font-semibold"
        style={{
          color: name === selected ? colors.white : colors.neutral[400]
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
