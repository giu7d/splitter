import ListBills from './listBills'

export default class FindBill {
  async call(billId: string) {
    const listBills = new ListBills()
    const bills = await listBills.call()
    const bill = bills.find(({ id }) => id === billId)

    if (!bill) throw new Error('Not found')

    return bill
  }
}
