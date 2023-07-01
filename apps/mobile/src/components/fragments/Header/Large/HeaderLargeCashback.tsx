import { View } from 'react-native'

import Animated from 'react-native-reanimated'

import CashbackBadge from '@/components/fragments/Badges/Cashback'
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

  const renderMainCashbackText = () => (
    <CashbackBadge
      cashbackTotal={cashbackTotal}
      component={Animated.View}
      style={animatedCashbackLargeVisibility}
    />
  )

  return (
    <>
      <View className="flex-row items-center justify-start">
        {children(renderMainCashbackText)}
      </View>
      <CashbackBadge
        cashbackTotal={cashbackTotal}
        component={Animated.View}
        style={[animatedCashbackSmallTop, animatedCashbackSmallVisibility]}
      />
    </>
  )
}
