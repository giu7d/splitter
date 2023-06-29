import 'react-native-gesture-handler'

import { Slot } from 'expo-router'

import Provider from '@/providers'

export default function HomeLayout() {
  return (
    <Provider>
      <Slot />
    </Provider>
  )
}
