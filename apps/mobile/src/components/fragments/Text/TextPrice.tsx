import { Text, TextProps, View } from 'react-native'

import classNames from 'classnames'

type Props = {
  children: string
} & TextProps

export default function TextPrice({ children, className, ...props }: Props) {
  return (
    <View className="flex-row items-end gap-1">
      <Text
        className={classNames(
          'text-neutral-800 text-sm font-semibold pb-1',
          className
        )}
        {...props}
      >
        R$
      </Text>
      <Text
        className={classNames(
          'text-neutral-800 text-2xl font-semibold',
          className
        )}
        {...props}
      >
        {children}
      </Text>
    </View>
  )
}
