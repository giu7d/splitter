import fastify from 'fastify'

import { createContext, withFastifyTRPC } from '@/config/trpc'
import routes from '@/routes'

const server = fastify({ logger: true })

void server.register(withFastifyTRPC, {
  prefix: '/trpc',
  trpcOptions: { router: routes, createContext }
})

export default server
