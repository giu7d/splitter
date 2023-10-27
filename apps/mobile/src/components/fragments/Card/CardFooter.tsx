import React from 'react'
import { Text, View } from 'react-native'

import classNames from 'classnames'

type Props = {
  children: string
  statusClassName?: string
}
export default function CardFooter({
  children,
  statusClassName = 'bg-orange-500'
}: Props) {
  return (
    <View className="border-t border-neutral-200 h-10 items-center justify-center flex-row">
      <View
        className={classNames('h-2 w-2 rounded-full mr-2', statusClassName)}
      />
      <Text className="text-xs">{children}</Text>
    </View>
  )
}
