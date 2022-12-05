import { ComponentType } from 'react'
import { Text, View, ViewProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { StyledComponent } from 'nativewind'
import colors from 'tailwindcss/colors'

type Props = ViewProps & {
  cashbackTotal: string
  component?: ComponentType<any>
}

export default function CashbackBadge({ cashbackTotal, ...props }: Props) {
  return (
    <StyledComponent
      className="flex-row gap-1 items-center"
      component={View}
      {...props}
    >
      <Feather name="refresh-cw" color={colors.green[500]} size={14} />
      <Text className="text-green-500 font-semibold text-base">
        {cashbackTotal}
      </Text>
    </StyledComponent>
  )
}
