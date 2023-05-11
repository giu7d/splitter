import { withProcedure, withRouter } from '@/config/trpc'
import ListBills from '@/useCases/listBills'

const listBills = new ListBills()

const billsRoutes = withRouter({
  list: withProcedure().query(async () => await listBills.call())
})

export default billsRoutes
