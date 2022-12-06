import { ComponentType } from 'react'
import { View, ViewProps } from 'react-native'

import { StyledComponent } from 'nativewind'

type Props = ViewProps & {
  className?: string
  component?: ComponentType<any>
}

export default function RoundedIcons({
  component = View,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <StyledComponent
      component={component}
      className={`h-6 w-6 rounded-full justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </StyledComponent>
  )
}
