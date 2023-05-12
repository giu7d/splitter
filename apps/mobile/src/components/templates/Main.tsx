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
import { useSetAtom } from 'jotai'
import { RefreshControl } from 'react-native-gesture-handler'

import { isMainTemplateScrolledAtom } from '@/services/states'

type Props = {
  children: JSX.Element | JSX.Element[]
  onRefresh?: () => Promise<void>
  renderHeader?: JSX.Element
  renderFooter?: JSX.Element
  scrollViewProps?: ScrollViewProps
}

export default function MainTemplate({
  children,
  renderHeader,
  renderFooter,
  onRefresh = async () => {},
  scrollViewProps = {}
}: Props) {
  const setIsMainTemplateScrolled = useSetAtom(isMainTemplateScrolledAtom)

  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setIsMainTemplateScrolled(event.nativeEvent.contentOffset.y > 5)

  const handlePageRefresh = () => {
    setIsRefreshing(true)
    onRefresh().finally(() => setIsRefreshing(false))
  }

  return (
    <View className="bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow h-full pt-6">
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
          {renderHeader}
          {children}
        </ScrollView>
      </SafeAreaView>
      {renderFooter}
    </View>
  )
}
