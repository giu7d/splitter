import { useState } from 'react'

import Tab from '@/components/fragments/Tab'

const FILTER_ITEMS = [
  { id: 'all', label: 'All' },
  { id: 'unpaid', label: 'Unpaid' },
  { id: 'paid', label: 'Paid' },
  { id: 'deleted', label: 'Deleted' }
]

export default function FilterBills() {
  const [selected, setSelected] = useState('all')

  return (
    <Tab.Root
      data={FILTER_ITEMS}
      renderData={({ item, ...props }) => (
        <Tab.Item
          key={`tab-item-${item.id}`}
          selected={item.id === selected}
          {...props}
        >
          {item.label}
        </Tab.Item>
      )}
      renderIndicator={(sharedValue) => (
        <Tab.SelectionIndicator controlSharedValue={sharedValue} />
      )}
      onChange={({ id }) => setSelected(id)}
    />
  )
}
