import { View } from 'react-native'

import Avatar from '../Avatar'
import Text from '../Text'

type Props = {
  icon: string
  iconClassName?: string
  children: string
}

export default function CardHeader({
  children,
  icon,
  iconClassName = 'bg-neutral-100'
}: Props) {
  return (
    <View className="pt-6">
      <View className="gap-2">
        {Boolean(icon) && (
          <Avatar.Icon className={iconClassName}>{icon}</Avatar.Icon>
        )}
        <Text.Title>{children}</Text.Title>
      </View>
    </View>
  )
}
