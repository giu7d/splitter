import { registerRootComponent } from 'expo'

import App from '@/App'

if (typeof window !== 'undefined') {
  // @ts-expect-error
  window._frameTimestamp = null
}

registerRootComponent(App)
