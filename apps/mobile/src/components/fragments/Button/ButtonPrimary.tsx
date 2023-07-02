import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { StyledComponent } from 'nativewind'

type Props = TouchableOpacityProps & { children: string; textProps?: TextProps }

export default function ButtonPrimary({
  children,
  textProps = {},
  ...touchableOpacityProps
}: Props) {
  return (
    <StyledComponent
      {...touchableOpacityProps}
      component={TouchableOpacity}
      className={`bg-neutral-900 justify-center items-center h-16 rounded-2xl ${touchableOpacityProps.className}`}
    >
      <StyledComponent
        {...textProps}
        component={Text}
        className={`text-md font-semibold text-white ${textProps.className}`}
      >
        {children}
      </StyledComponent>
    </StyledComponent>
  )
}
