import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

type Props = TouchableOpacityProps

export default function MiniBannerRoot({ children, ...props }: Props) {
  return (
    <TouchableOpacity className="h-36 shadow-md" {...props}>
      <LinearGradient
        className="flex-1 flex-col rounded-xl"
        colors={['rgba(255, 210, 210, 0.5)', 'rgba(255, 210, 210, 1)']}
        start={{ y: 0, x: 0 }}
        end={{ y: 1, x: 1 }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}
