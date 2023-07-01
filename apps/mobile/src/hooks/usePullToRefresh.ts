import { useState } from 'react'

export default function usePullToRefresh(onRefresh: () => Promise<any>) {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    onRefresh().finally(() => setIsRefreshing(false))
  }

  return { isRefreshing, handleRefresh }
}
