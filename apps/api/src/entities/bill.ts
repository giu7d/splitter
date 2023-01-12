import { User } from './user'

export type Bill = {
  name: string
  status: 'payed' | 'pending' | 'cancelled'
  participants: User[]
  splitValue: string
  totalValue: string
  currency: string
}
