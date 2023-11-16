import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

type Props = TouchableOpacityProps

export default function MiniBannerRoot({ children, ...props }: Props) {
  return (
    <TouchableOpacity
      className="h-36 rounded-xl bg-white shadow-md overflow-hidden"
      {...props}
    >
      <LinearGradient
        className="flex-col flex-grow"
        colors={['rgba(255, 210, 210, 0.5)', 'rgba(255, 210, 210, 1)']}
        start={{ y: 0, x: 0 }}
        end={{ y: 1, x: 1 }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  )
}
