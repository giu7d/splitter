import { TouchableOpacity, View } from 'react-native'

import Animated from 'react-native-reanimated'

import CashbackBadge from '@/components/fragments/Badges/Cashback'
import ProfileImage from '@/components/fragments/ProfileImage'
import {
  useFontSizeAnimation,
  useMarginRightAnimation,
  useSizeAnimation,
  useTopAnimation,
  useVisibilityAnimation
} from '@/hooks/utils/useAnimation'
import { trpc } from '@/services/api'

interface Props {
  isCompact?: boolean
  onOpenProfile?: () => void
}

function useHeaderAnimations(condition: boolean) {
  return {
    image: [useSizeAnimation(condition), useMarginRightAnimation(condition)],
    text: useFontSizeAnimation(condition),
    hiddenWhenCompacted: useVisibilityAnimation(condition),
    visibleWhenCompacted: [
      useVisibilityAnimation(!condition),
      useTopAnimation(!condition)
    ]
  }
}

export default function Header({
  isCompact = false,
  onOpenProfile = () => {}
}: Props) {
  const { data } = trpc.user.useQuery()
  const animations = useHeaderAnimations(isCompact)

  if (!data) return <></>

  return (
    <View className="flex-row items-center p-6 py-4 justify-between">
      <View className="flex-row items-center justify-start">
        <TouchableOpacity onPress={onOpenProfile}>
          <ProfileImage
            source={{ uri: data.photo }}
            component={Animated.Image}
            style={animations.image}
          />
        </TouchableOpacity>
        <View>
          <View className="gap-1">
            <View>
              <Animated.Text
                className="text-base text-neutral-500"
                style={animations.hiddenWhenCompacted}
              >
                Hello
              </Animated.Text>
              <Animated.Text
                className="text-2xl capitalize text-neutral-900 font-semibold"
                style={animations.text}
              >
                {data.firstName} {data.lastName}
              </Animated.Text>
            </View>
            <CashbackBadge
              cashbackTotal={data.cashbackTotal}
              component={Animated.View}
              style={animations.hiddenWhenCompacted}
            />
          </View>
        </View>
      </View>
      <CashbackBadge
        cashbackTotal={data.cashbackTotal}
        component={Animated.View}
        style={[animations.visibleWhenCompacted]}
      />
    </View>
  )
}
