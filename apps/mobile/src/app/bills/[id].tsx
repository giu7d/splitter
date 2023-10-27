import { View } from 'react-native'

import BaseTemplate from '@/components/templates/Base'
import { trpc } from '@/services/api'

export default function BillsId() {
  const user = trpc.users.find.useQuery({ id: 'my-id' })

  if (!user.data) return <View testID="bill-screen"></View>

  return (
    <BaseTemplate.Root>
      <View testID="bill-screen"></View>
    </BaseTemplate.Root>
  )
}
