import { useProcedure, useRouter } from '@/config/trpc'
import ListBills from '@/useCases/listBills'

const listBills = new ListBills()

const billsRoutes = useRouter({
  list: useProcedure().query(() => listBills.call())
})

export default billsRoutes
