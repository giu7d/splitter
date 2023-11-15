import { SafeAreaView, ScrollView, ScrollViewProps } from 'react-native'

import { RefreshControl } from 'react-native-gesture-handler'

import usePullToRefresh from '@/hooks/usePullToRefresh'
import useScreenScroll from '@/hooks/useScreenScroll'

type Props = {
  children: JSX.Element | JSX.Element[]
  onRefresh?: () => Promise<void>
  renderBefore?: JSX.Element
  renderAfter?: JSX.Element
  scrollViewProps?: ScrollViewProps
}

export default function PageTemplateRoot({
  children,
  renderBefore,
  renderAfter,
  onRefresh = async () => {},
  scrollViewProps = {}
}: Props) {
  const { isRefreshing, handleRefresh } = usePullToRefresh(onRefresh)
  const { handleScroll } = useScreenScroll()

  return (
    <SafeAreaView className="bg-white flex-grow h-full">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
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
        {renderBefore}
        {children}
      </ScrollView>
      {renderAfter}
    </SafeAreaView>
  )
}
