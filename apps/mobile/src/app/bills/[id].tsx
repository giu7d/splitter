import { Text, View } from 'react-native'

import { useLocalSearchParams } from 'expo-router'

export default function BillsId() {
  const { id } = useLocalSearchParams()

  return (
    <View
      testID="bill-screen"
      className="flex-grow items-center justify-center"
    >
      <Text>Bill {id}</Text>
    </View>
  )
}
