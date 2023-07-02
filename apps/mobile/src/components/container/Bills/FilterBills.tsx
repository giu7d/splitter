import { useState } from 'react'

import Tab from '@/components/fragments/Tab'
import useLayouts from '@/hooks/useLayouts'

const DEFAULT_PADDING_LEFT = 4

const FILTER_ITEMS = [
  { id: 'all', label: 'All' },
  { id: 'unpaid', label: 'Unpaid' },
  { id: 'paid', label: 'Paid' },
  { id: 'deleted', label: 'Deleted' }
]

export default function FilterBills() {
  const [selected, setSelected] = useState('all')

  const layoutsControl = useLayouts({
    defaultPaddingLeft: DEFAULT_PADDING_LEFT
  })

  const handleSelect = (id: string) => {
    setSelected(id)
    layoutsControl.moveTo(id)
  }

  return (
    <Tab.Root
      renderIndicator={
        <Tab.SelectionIndicator
          controlSharedValue={layoutsControl.currentLayoutPosition}
        />
      }
    >
      {FILTER_ITEMS.map((item) => (
        <Tab.Item
          key={`tab-item-${item.id}`}
          selected={item.id === selected}
          onPress={() => handleSelect(item.id)}
          onLayout={layoutsControl.factoryLayoutHandler(item.id)}
        >
          {item.label}
        </Tab.Item>
      ))}
    </Tab.Root>
  )
}
