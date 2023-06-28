import { useAtom } from 'jotai'

import { isDrawerVisibleAtom } from '@/services/states'

export default function useDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = useAtom(isDrawerVisibleAtom)

  const show = () => setIsDrawerVisible(true)

  const hide = () => setIsDrawerVisible(false)

  return { state: isDrawerVisible, show, hide }
}
