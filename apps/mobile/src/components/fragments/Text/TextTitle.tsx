import { Text, TextProps } from 'react-native'

import classNames from 'classnames'

type Props = TextProps

export default function TextTitle({ children, className, ...props }: Props) {
  return (
    <Text
      className={classNames(
        'text-center font-semibold text-lg text-black opacity-90',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  )
}
