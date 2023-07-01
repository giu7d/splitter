import { SafeAreaView, ScrollView, ScrollViewProps, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { RefreshControl } from 'react-native-gesture-handler'

import usePullToRefresh from '@/hooks/usePullToRefresh'
import useScreenScroll from '@/hooks/useScreenScroll'

type Props = {
  children: JSX.Element | JSX.Element[]
  onRefresh?: () => Promise<void>
  renderHeader?: JSX.Element
  renderFooter?: JSX.Element
  scrollViewProps?: ScrollViewProps
}

export default function BaseTemplate({
  children,
  renderHeader,
  renderFooter,
  onRefresh = async () => {},
  scrollViewProps = {}
}: Props) {
  const { isRefreshing, handleRefresh } = usePullToRefresh(onRefresh)
  const { handleScroll } = useScreenScroll()

  return (
    <View className="bg-white">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow h-full pt-6">
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
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
