import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'

import { TRPCProvider, createTRPCClient } from '@/services/api'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const queryClient = new QueryClient()

const trpcClient = createTRPCClient()

export default function Provider({ children }: Props) {
  return (
    <JotaiProvider>
      <TRPCProvider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </TRPCProvider>
    </JotaiProvider>
  )
}
