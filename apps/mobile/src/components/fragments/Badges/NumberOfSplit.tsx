import { ComponentType } from 'react'
import { Text, View, ViewProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { StyledComponent } from 'nativewind'
import colors from 'tailwindcss/colors'

type Props = ViewProps & {
  numberOfSplit: number
  component?: ComponentType<any>
  iconColor?: string
  textClassName?: string
}

export default function NumberOfSplitBadge({
  numberOfSplit,
  className,
  iconColor,
  textClassName = '',
  component = View,
  ...props
}: Props) {
  return (
    <StyledComponent
      className={`flex-row gap-1 items-center ${className}`}
      component={component}
      {...props}
    >
      <Feather
        name="users"
        color={iconColor ?? colors.neutral[900]}
        size={14}
      />
      <Text
        className={`text-neutral-900 font-semibold text-base ${textClassName}`}
      >
        {numberOfSplit}
      </Text>
    </StyledComponent>
  )
}
