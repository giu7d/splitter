import { inferAsyncReturnType, initTRPC } from '@trpc/server'
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

export { fastifyTRPCPlugin as withFastifyTRPC } from '@trpc/server/adapters/fastify'

const trpc = initTRPC.create()

export const router = trpc.router

export const middleware = trpc.middleware

export const procedure = trpc.procedure

export function createContext({ req, res }: CreateFastifyContextOptions) {
  return { req, res }
}

export type Context = inferAsyncReturnType<typeof createContext>
