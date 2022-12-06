import { View, ViewProps } from 'react-native'

import { StyledComponent } from 'nativewind'

export function CardHeader({ children, className, ...props }: ViewProps) {
  return (
    <StyledComponent
      component={View}
      className={`flex-row justify-between items-start ${className}`}
      {...props}
    >
      {children}
    </StyledComponent>
  )
}

export function CardActions({ children, className, ...props }: ViewProps) {
  return (
    <StyledComponent
      component={View}
      className={`flex-row justify-end items-end ${className}`}
      {...props}
    >
      {children}
    </StyledComponent>
  )
}

export function Card({ children, className, ...props }: ViewProps) {
  return (
    <StyledComponent
      component={View}
      className={`bg-white h-56 rounded-3xl p-6 justify-between shadow-md opacity-90 ${className}`}
      {...props}
    >
      {children}
    </StyledComponent>
  )
}
