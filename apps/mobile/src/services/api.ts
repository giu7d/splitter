import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { TRPCRoutes } from 'commerce-api/src/routes'
import Constants from 'expo-constants'

const API_PORT = Constants?.manifest?.extra?.API_PORT ?? ''

export const API_URL = `http://localhost:${API_PORT}/trpc`

export const trpc = createTRPCReact<TRPCRoutes>()

export const createTRPCClient = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: API_URL
        // optional
        // headers() {
        //   return {
        //     authorization: getAuthCookie()
        //   }
        // }
      })
    ]
  })
