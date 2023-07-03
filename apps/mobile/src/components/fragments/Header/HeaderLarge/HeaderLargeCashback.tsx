import { View } from 'react-native'

import Animated from 'react-native-reanimated'

import Badge from '@/components/fragments/Badge'
import {
  useTopAnimation,
  useVisibilityAnimation
} from '@/hooks/utils/useAnimation'

type Props = {
  children: (renderCashbackText: () => JSX.Element) => JSX.Element
  cashbackTotal: string
  controlValue?: boolean
}

export default function HeaderLargeCashback({
  children,
  cashbackTotal,
  controlValue = false
}: Props) {
  const animatedCashbackSmallTop = useTopAnimation(!controlValue)
  const animatedCashbackSmallVisibility = useVisibilityAnimation(!controlValue)
  const animatedCashbackLargeVisibility = useVisibilityAnimation(controlValue)

  const renderCashbackLargeText = () => (
    <Badge.Cashback
      component={Animated.View}
      style={animatedCashbackLargeVisibility}
    >
      {cashbackTotal}
    </Badge.Cashback>
  )

  return (
    <>
      <View className="flex-row items-center justify-start">
        {children(renderCashbackLargeText)}
      </View>
      <Badge.Cashback
        component={Animated.View}
        style={[animatedCashbackSmallTop, animatedCashbackSmallVisibility]}
      >
        {cashbackTotal}
      </Badge.Cashback>
    </>
  )
}
