import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { TRPCRoutes } from 'commerce-api/src/routes'
import Constants from 'expo-constants'

const API_URL = Constants?.manifest?.extra?.API_URL ?? ''

export const API_TRPC_URL = `${API_URL}/trpc`

export const trpc = createTRPCReact<TRPCRoutes>()

export const createTRPCClient = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: API_TRPC_URL
        // optional
        // headers() {
        //   return {
        //     authorization: getAuthCookie()
        //   }
        // }
      })
    ]
  })
