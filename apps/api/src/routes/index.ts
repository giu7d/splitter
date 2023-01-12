import { useRouter } from '@/config/trpc'

import billsRoutes from './bills'
import usersRoutes from './users'

const routes = useRouter({
  users: usersRoutes,
  bills: billsRoutes
})

export type Routes = typeof routes

export default routes
