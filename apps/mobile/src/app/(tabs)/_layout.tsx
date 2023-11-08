import { Tabs } from 'expo-router'

import TabBarTemplate from '@/components/templates/TabBar'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => null
      }}
      tabBar={(props: any) => <TabBarTemplate {...props} />}
    />
  )
}
