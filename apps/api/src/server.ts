import fastify from 'fastify'

import { createContext, withFastifyTRPC } from '@/src/config/trpc'
import routes from '@/src/routes'

const server = fastify({ logger: true })

void server.register(withFastifyTRPC, {
  prefix: '/trpc',
  trpcOptions: { router: routes, createContext }
})

export default server
