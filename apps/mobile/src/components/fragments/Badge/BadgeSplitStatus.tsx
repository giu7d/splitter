import { ComponentType } from 'react'
import { Text, View, ViewProps } from 'react-native'

import classNames from 'classnames'

export const status = {
  payed: {
    statusClassName: 'bg-green-500',
    statusContent: 'Your split is paid'
  },
  pending: {
    statusClassName: 'bg-orange-500',
    statusContent: 'Your split is unpaid'
  },
  cancelled: {
    statusClassName: 'bg-neutral-300',
    statusContent: 'Split cancelled'
  }
}

type Props = ViewProps & {
  children: string
  statusClassName?: string
  component?: ComponentType<any>
}

export default function BadgeSplitStatus({
  children,
  statusClassName,
  ...props
}: Props) {
  return (
    <View className="flex-row gap-1 items-center" {...props}>
      <View
        className={classNames('h-2 w-2 rounded-full mr-2', statusClassName)}
      />
      <Text className="text-xs">{children}</Text>
    </View>
  )
}
