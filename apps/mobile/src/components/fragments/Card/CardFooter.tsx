import React from 'react'
import { Text, View } from 'react-native'

export default function CardFooter() {
  return (
    <View className="border-t border-neutral-200 h-10 items-center justify-center flex-row">
      <View className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
      <Text className="text-xs">Your split is unpaid</Text>
    </View>
  )
}
