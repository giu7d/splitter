import { z } from 'zod'

import { procedure, router } from '@/src/config/trpc'

const validateHelloQuery = z.object({
  text: z.string()
})

const routes = router({
  hello: procedure.input(validateHelloQuery).query(({ input }) => {
    return [`hello ${input.text}`]
  })
})

export type Routes = typeof routes

export default routes
