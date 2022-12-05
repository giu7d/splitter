import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createTRPCClient, trpc } from '@/services/api'

interface Props {
  children: JSX.Element
}

const queryClient = new QueryClient()

const trpcClient = createTRPCClient()

export default function Provider({ children }: Props) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
