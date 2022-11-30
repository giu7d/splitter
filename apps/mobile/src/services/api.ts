import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { TRPCRoutes } from 'commerce-api/src/routes'

export const API_URL = 'http://localhost:5000/trpc'

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
