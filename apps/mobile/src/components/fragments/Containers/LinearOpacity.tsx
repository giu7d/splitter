import React from 'react'

import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import colors from 'tailwindcss/colors'

type Props = Partial<LinearGradientProps>

export function LinearOpacityTopContainer({ children, ...props }: Props) {
  return (
    <LinearGradient
      colors={[colors.white, 'rgba(255,255,255,0)']}
      start={{ y: 0.7, x: 0 }}
      end={{ y: 1, x: 0 }}
      {...props}
    >
      {children}
    </LinearGradient>
  )
}

export function LinearOpacityBottomContainer({ children, ...props }: Props) {
  return (
    <LinearGradient
      colors={[colors.white, 'rgba(255,255,255,0)']}
      start={{ y: 0.75, x: 0 }}
      end={{ y: 0, x: 0 }}
      {...props}
    >
      {children}
    </LinearGradient>
  )
}
