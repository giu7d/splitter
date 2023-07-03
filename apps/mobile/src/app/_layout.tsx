import { Tabs } from 'expo-router'

import Provider from '@/providers'

export default function HomeLayout() {
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
