import { Tabs } from 'expo-router'

import Provider from '@/providers'

export default function AppLayout() {
  return (
    <Provider>
      <Tabs
        screenOptions={{
          header: () => null
        }}
        tabBar={() => null}
      />
    </Provider>
  )
}
