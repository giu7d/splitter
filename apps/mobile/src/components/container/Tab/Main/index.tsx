import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import PrimaryButton from '@/components/fragments/Button/Primary'
import { LinearOpacityBottomContainer } from '@/components/fragments/Containers/LinearOpacity'

import { TABS } from './constants'
import { getSelectedTabProps } from './utils'

type Props = {
  onChangeTab?: (tab: string) => void
  onPressNew?: () => void
}

export default function MainTab({
  onPressNew = () => {},
  onChangeTab = () => {}
}: Props) {
  const [tab, setTab] = useState('home')

  const handleChangeTap = (newTab: string) => {
    setTab(newTab)
    onChangeTab(newTab)
  }

  return (
    <LinearOpacityBottomContainer className="absolute w-full p-6 px-4 bottom-0">
      <View className="items-center justify-between flex-row gap-6">
        {TABS.map((item) => {
          const props = getSelectedTabProps(item.name, tab)
          return (
            <TouchableOpacity
              key={`tab-${item.name}`}
              className={`h-12 w-12 justify-center items-center ${props.className}`}
              onPress={() => handleChangeTap(item.name)}
            >
              <Feather name={item.icon as any} color={props.color} size={24} />
            </TouchableOpacity>
          )
        })}
        <PrimaryButton onPress={onPressNew} className="h-12 flex-grow">
          New
        </PrimaryButton>
      </View>
    </LinearOpacityBottomContainer>
  )
}
