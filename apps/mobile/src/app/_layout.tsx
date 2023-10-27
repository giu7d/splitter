import { Stack } from 'expo-router'

import Provider from '@/providers'

export default function AppLayout() {
  return (
    <Provider>
      <Stack
        screenOptions={{
          header: () => null
        }}
      />
    </Provider>
  )
}
