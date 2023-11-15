import { View, ViewProps } from 'react-native'

import classNames from 'classnames'

import Text from '../Text'

type Props = ViewProps

export default function AvatarIcon({ children, className, ...props }: Props) {
  return (
    <View
      className={classNames(
        'h-16 w-16 rounded-full items-center justify-center',
        className
      )}
      {...props}
    >
      <Text.Default className="text-4xl">{children}</Text.Default>
    </View>
  )
}
