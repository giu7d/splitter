import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { DrawerProvider } from '@/hooks/useDrawer'
import { createTRPCClient, trpc } from '@/services/api'

type Props = {
  children: JSX.Element
}

const queryClient = new QueryClient()

const trpcClient = createTRPCClient()

export default function Provider({ children }: Props) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <DrawerProvider>{children}</DrawerProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
