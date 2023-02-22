import { setupServer } from 'msw/node'
import { createTRPCMsw } from 'msw-trpc'
import type { Routes } from 'splitter-api/src/routes'

export const trpcMSW = createTRPCMsw<Routes>()

export const server = setupServer(
  trpcMSW.bills.list.query((_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data([
        {
          name: 'Churras',
          status: 'pending',
          participants: [],
          currency: 'BRL',
          splitValue: '60.00',
          totalValue: '240.00'
        }
      ])
    )
  }),
  trpcMSW.users.find.query((_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({
        id: '1234',
        photo: 'https://avatars.githubusercontent.com/u/30274817?v=4',
        firstName: 'Name',
        lastName: 'Surname',
        username: 'name.surname',
        cashback: {
          total: '20.00',
          currency: 'BRL'
        }
      })
    )
  })
)
