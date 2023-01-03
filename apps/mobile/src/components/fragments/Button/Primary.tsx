import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { StyledComponent } from 'nativewind'

type Props = TouchableOpacityProps & { children: string; textProps?: TextProps }

export default function PrimaryButton({
  children,
  textProps = {},
  ...touchableOpacityProps
}: Props) {
  return (
    <StyledComponent
      {...touchableOpacityProps}
      component={TouchableOpacity}
      className={`bg-neutral-900 justify-center items-center p-5 rounded-2xl ${touchableOpacityProps.className}`}
    >
      <StyledComponent
        {...textProps}
        component={Text}
        className={`text-lg font-semibold text-white ${textProps.className}`}
      >
        {children}
      </StyledComponent>
    </StyledComponent>
  )
}
