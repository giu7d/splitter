import { Text, View } from 'react-native'

import { ErrorBoundaryProps } from 'expo-router'

export default function ErrorBoundaryTemplate(props: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{props.error.message}</Text>
      <Text onPress={props.retry}>Try Again?</Text>
    </View>
  )
}
