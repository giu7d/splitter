import { Tabs, useRouter } from 'expo-router'

import Button from '@/components/fragments/Button'
import Template from '@/components/templates'

export default function TabsLayout() {
  const router = useRouter()

  return (
    <Template.Tab.Root>
      {/* <AppBarTemplate /> */}
      <Tabs
        sceneContainerStyle={{
          backgroundColor: 'transparent'
        }}
        screenOptions={{
          header: () => null
        }}
        tabBar={(props: any) => (
          <Template.Tab.Navigation
            {...props}
            renderAfter={
              <Button.Primary
                className="h-12 flex-grow"
                onPress={() => router.push('/bills/create')}
              >
                New
              </Button.Primary>
            }
          />
        )}
      />
    </Template.Tab.Root>
  )
}
