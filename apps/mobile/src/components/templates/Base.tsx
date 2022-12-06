import { useState } from 'react'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  ScrollViewProps
} from 'react-native'

import { StatusBar } from 'expo-status-bar'

interface Props {
  header: (isCompact: boolean) => JSX.Element
  children: JSX.Element | JSX.Element[]
  scrollViewProps?: ScrollViewProps
}

export default function BaseTemplate({
  header,
  children,
  scrollViewProps = {}
}: Props) {
  const [isCompactedHeader, setIsCompactedHeader] = useState(false)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setIsCompactedHeader(event.nativeEvent.contentOffset.y > 5)

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow">
        {header(isCompactedHeader)}
        <ScrollView
          scrollEventThrottle={1000}
          onScroll={handleScroll}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 200
          }}
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
