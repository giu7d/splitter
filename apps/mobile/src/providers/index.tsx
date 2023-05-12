import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import { HoldMenuProvider } from 'react-native-hold-menu'

import { DrawerProvider } from '@/hooks/useDrawer'
import { createTRPCClient, trpc } from '@/services/api'

type Props = {
  children: JSX.Element
}

const queryClient = new QueryClient()

const trpcClient = createTRPCClient()

export default function Provider({ children }: Props) {
  return (
    <JotaiProvider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <HoldMenuProvider
            theme="dark"
            safeAreaInsets={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}
          >
            <DrawerProvider>{children}</DrawerProvider>
          </HoldMenuProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </JotaiProvider>
  )
}
