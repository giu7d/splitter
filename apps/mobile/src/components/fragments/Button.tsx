import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { StyledComponent } from 'nativewind'

type Props = TouchableOpacityProps & { children: string; textProps?: TextProps }

export default function Button({
  children,
  textProps = {},
  ...touchableOpacityProps
}: Props) {
  return (
    <StyledComponent
      {...touchableOpacityProps}
      component={TouchableOpacity}
      className={`bg-white h-10 w-24 rounded-full justify-center items-center ${touchableOpacityProps.className}`}
    >
      <StyledComponent
        {...textProps}
        component={Text}
        className={`text-neutral-900 text-sm font-semibold ${textProps.className}`}
      >
        {children}
      </StyledComponent>
    </StyledComponent>
  )
}
