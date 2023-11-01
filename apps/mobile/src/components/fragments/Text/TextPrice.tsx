import { Text, TextProps, View } from 'react-native'

import classNames from 'classnames'

type Props = {
  children: string
} & TextProps

export default function TextPrice({ children, className, ...props }: Props) {
  return (
    <View className="flex-row items-end gap-0.5">
      <Text
        className={classNames(
          'text-black opacity-90 text-base font-semibold pb-1',
          className
        )}
        {...props}
      >
        R$
      </Text>
      <Text
        className={classNames(
          'text-black opacity-90 text-2xl font-semibold',
          className
        )}
        {...props}
      >
        {children}
      </Text>
    </View>
  )
}
