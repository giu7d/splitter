import { z } from 'zod'

import { useProcedure, useRouter } from '@/config/trpc'
import { useValidUser } from '@/entities/user'
import CreateUser from '@/useCases/createUser'
import FindUser from '@/useCases/findUser'

const findUser = new FindUser()
const createUser = new CreateUser()

const usersRoutes = useRouter({
  find: useProcedure()
    .input(z.object({ id: z.string() }))
    .query(({ input }) => findUser.call(input.id)),
  create: useProcedure()
    .input(useValidUser())
    .mutation(({ input }) => createUser.call(input))
})

export default usersRoutes
