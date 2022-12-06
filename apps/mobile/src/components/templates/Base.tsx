import { useState } from 'react'
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  ScrollViewProps
} from 'react-native'

import { StatusBar } from 'expo-status-bar'

import CreateBill from '../container/CreateBill'

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
      <CreateBill />
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow">
        <ScrollView
          stickyHeaderIndices={[0, 1]}
          scrollEventThrottle={1000}
          onScroll={handleScroll}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 25
          }}
          {...scrollViewProps}
        >
          {/* TODO: scroll to refresh  */}
          <ActivityIndicator className="absolute w-full p-6 bottom-0" />
          {header(isCompactedHeader)}
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
