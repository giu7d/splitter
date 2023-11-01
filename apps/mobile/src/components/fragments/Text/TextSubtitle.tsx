import { Text, TextProps } from 'react-native'

import classNames from 'classnames'

type Props = TextProps

export default function TextSubtitle({ children, className, ...props }: Props) {
  return (
    <Text
      className={classNames(
        'text-black text-sm opacity-40 font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  )
}
