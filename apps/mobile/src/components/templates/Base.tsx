import { useState } from 'react'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  View
} from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { RefreshControl } from 'react-native-gesture-handler'

type Props = {
  children: JSX.Element | JSX.Element[]
  onRefresh?: () => Promise<void>
  renderHeader?: (isCompact: boolean) => JSX.Element
  renderFooter?: (isCompact: boolean) => JSX.Element
  scrollViewProps?: ScrollViewProps
}

export default function BaseTemplate({
  children,
  renderHeader = () => <></>,
  renderFooter = () => <></>,
  onRefresh = async () => {},
  scrollViewProps = {}
}: Props) {
  const [isCompactedHeader, setIsCompactedHeader] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setIsCompactedHeader(event.nativeEvent.contentOffset.y > 5)

  const handlePageRefresh = () => {
    setIsRefreshing(true)
    onRefresh().finally(() => setIsRefreshing(false))
  }

  return (
    <View className="bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow mt-6">
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handlePageRefresh}
            />
          }
          stickyHeaderIndices={[0]}
          scrollEventThrottle={1000}
          onScroll={handleScroll}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 25
          }}
          {...scrollViewProps}
        >
          {renderHeader(isCompactedHeader)}
          {children}
        </ScrollView>
      </SafeAreaView>
      {renderFooter(isCompactedHeader)}
    </View>
  )
}
