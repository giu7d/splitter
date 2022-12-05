import { ComponentType } from 'react'
import { Image, ImageProps } from 'react-native'

import { StyledComponent } from 'nativewind'

type Props = ImageProps & {
  component?: ComponentType<any>
}

export default function ProfileImageDefault({ className, ...props }: Props) {
  return (
    <StyledComponent
      className={`w-16 h-16 rounded-full shadow-md border-white border-2 ${className}`}
      component={Image}
      {...props}
    />
  )
}
