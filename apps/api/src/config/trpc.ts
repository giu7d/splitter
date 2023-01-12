import { inferAsyncReturnType, initTRPC } from '@trpc/server'
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

export { fastifyTRPCPlugin as withFastifyTRPC } from '@trpc/server/adapters/fastify'

export const trpc = initTRPC.create()

export const useRouter = trpc.router

export const useMiddleware = trpc.middleware

export const useProcedure = () => trpc.procedure

export function createContext({ req, res }: CreateFastifyContextOptions) {
  return { req, res }
}

export type Context = inferAsyncReturnType<typeof createContext>
