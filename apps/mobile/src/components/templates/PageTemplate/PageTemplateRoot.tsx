import { SafeAreaView, ScrollViewProps } from 'react-native'

import { RefreshControl } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

import usePullToRefresh from '@/hooks/usePullToRefresh'

type Props = {
  children: JSX.Element | JSX.Element[]
  onRefresh?: () => Promise<void>
  onScroll?: (e: any) => void
  renderBefore?: JSX.Element
  renderAfter?: JSX.Element
  scrollViewProps?: ScrollViewProps
}

export default function PageTemplateRoot({
  children,
  renderBefore,
  renderAfter,
  onRefresh = async () => {},
  onScroll = () => {},
  scrollViewProps = {}
}: Props) {
  const { isRefreshing, handleRefresh } = usePullToRefresh(onRefresh)

  return (
    <SafeAreaView className="bg-white flex-grow h-full">
      <Animated.ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        stickyHeaderIndices={[0]}
        scrollEventThrottle={1000}
        onScroll={onScroll}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 25
        }}
        {...scrollViewProps}
      >
        {renderBefore}
        {children}
      </Animated.ScrollView>
      {renderAfter}
    </SafeAreaView>
  )
}
