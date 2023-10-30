import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import colors from 'tailwindcss/colors'

type Props = Partial<LinearGradientProps>

export function ContainerLinearOpacityTop({ children, ...props }: Props) {
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

export function ContainerLinearOpacityBottom({ children, ...props }: Props) {
  return (
    <LinearGradient
      colors={[colors.white, 'rgba(255,255,255,0)']}
      start={{ y: 0.5, x: 0 }}
      end={{ y: 0, x: 0 }}
      {...props}
    >
      {children}
    </LinearGradient>
  )
}
