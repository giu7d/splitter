import { Text, View } from 'react-native'

import classnames from 'classnames'

type Props = {
  icon: string
  iconClassName?: string
  children: string
}

export default function CardHeader({
  children,
  icon,
  iconClassName = 'border-red-50 bg-red-100'
}: Props) {
  return (
    <View className="pt-6">
      <View className="gap-2">
        <View
          className={classnames(
            'h-16 w-16 border rounded-full items-center justify-center',
            iconClassName
          )}
        >
          <Text className="text-4xl">{icon}</Text>
        </View>
        <Text className="text-center font-semibold text-lg text-neutral-800">
          {children}
        </Text>
      </View>
    </View>
  )
}
