import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

function getSelectedTabItemProps(selected: boolean) {
  if (selected)
    return {
      // className: 'border-t-2 border-t-neutral-800',
      color: colors.neutral[800]
    }

  return {
    // className: '',
    color: colors.neutral[400]
  }
}

type Props = TouchableOpacityProps & {
  icon: string
  selected: boolean
}

export default function NavigationTabItem({ icon, selected, ...props }: Props) {
  const selectedProps = getSelectedTabItemProps(selected)

  return (
    <TouchableOpacity
      className="h-12 w-12 mr-6 justify-center items-center"
      {...props}
    >
      <Feather name={icon as any} color={selectedProps.color} size={24} />
    </TouchableOpacity>
  )
}
