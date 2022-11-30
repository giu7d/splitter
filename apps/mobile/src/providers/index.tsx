import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createTRPCClient, trpc } from '@/services/api'

interface ProviderProps {
  children: JSX.Element
}

export default function Provider({ children }: ProviderProps) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => createTRPCClient())

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
