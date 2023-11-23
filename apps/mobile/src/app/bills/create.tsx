import { View } from 'react-native'

import { useNavigation } from 'expo-router'

import CreateBillContainer from '@/components/container/Bills/CreateBill'

export default function CreateBill() {
  const navigation = useNavigation()

  console.log(navigation.getState())

  return (
    <View testID="create-bill-screen">
      <CreateBillContainer />
    </View>
  )
}
