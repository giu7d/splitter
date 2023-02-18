import fastify from 'fastify'

import { createContext, withFastifyTRPC } from '@/config/trpc'
import routes from '@/routes'

const app = fastify({ logger: true })

void app.register(withFastifyTRPC, {
  prefix: '/trpc',
  trpcOptions: { router: routes, createContext }
})

export default app
