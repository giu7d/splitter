import { useState } from 'react'

import Tab from '@/components/fragments/Tab'

const FILTER_ITEMS = [
  { name: 'all', label: 'All' },
  { name: 'unpaid', label: 'Unpaid' },
  { name: 'paid', label: 'Paid' }
]

export default function FilterBills() {
  const [selected, setSelected] = useState('all')

  return <Tab items={FILTER_ITEMS} selected={selected} onSelect={setSelected} />
}
