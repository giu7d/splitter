import { Bill } from '@/entities/bill'

export default class ListBills {
  async call(): Promise<Bill[]> {
    return await new Promise((resolve) =>
      resolve([
        {
          name: 'Churras',
          status: 'pending',
          participants: [],
          currency: 'BRL',
          splitValue: '60.00',
          totalValue: '240.00'
        },
        {
          name: 'TV',
          status: 'payed',
          participants: [],
          currency: 'BRL',
          splitValue: '1401.00',
          totalValue: '2802.00'
        },
        {
          name: 'Futebas',
          status: 'payed',
          participants: [],
          currency: 'BRL',
          splitValue: '10.00',
          totalValue: '200.00'
        },
        {
          name: 'Internet',
          status: 'payed',
          participants: [],
          currency: 'BRL',
          splitValue: '100.00',
          totalValue: '200.00'
        }
      ])
    )
  }
}
