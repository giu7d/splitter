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
  }),
  user: procedure.query(() => ({
    photo: 'https://avatars.githubusercontent.com/u/30274817?v=4',
    firstName: 'Giuseppe',
    lastName: 'Setem',
    cashbackTotal: '20.00'
  })),
  bills: procedure.query(() => [
    {
      name: 'Churras',
      isPayed: false,
      numberOfSplit: 4,
      splitValue: '60.00',
      totalValue: '240.00'
    },
    {
      name: 'Aluguel',
      isPayed: true,
      numberOfSplit: 2,
      splitValue: '1401.00',
      totalValue: '2802.00'
    },
    {
      name: 'Futebas',
      isPayed: true,
      numberOfSplit: 20,
      splitValue: '10.00',
      totalValue: '200.00'
    },
    {
      name: 'Internet',
      isPayed: true,
      numberOfSplit: 2,
      splitValue: '50.00',
      totalValue: '100.00'
    }
  ])
})

export type TRPCRoutes = typeof routes

export default routes
