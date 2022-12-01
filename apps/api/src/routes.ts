import { z } from 'zod'

import { procedure, router } from '@/config/trpc'

const routes = router({
  post: router({
    byId: procedure.input(z.string()).query(() => ({
      id: 1,
      title: 'tRPC is the best!'
    })),
    create: procedure
      .input(z.object({ title: z.string(), text: z.string() }))
      .mutation(({ input }) => ({ id: 1, ...input }))
  })
})

export type TRPCRoutes = typeof routes

export default routes
