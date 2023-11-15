import { Text, View } from 'react-native'

import { useNavigation } from 'expo-router'

export default function CreateBill() {
  const navigation = useNavigation()

  console.log(navigation.getState())

  return (
    <View className="flex-grow items-center justify-center">
      <Text>create</Text>
    </View>
  )
}
