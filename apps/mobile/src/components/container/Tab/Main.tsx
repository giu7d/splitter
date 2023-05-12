import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import PrimaryButton from '@/components/fragments/Button/Primary'
import { LinearOpacityBottomContainer } from '@/components/fragments/Containers/LinearOpacity'

const TABS = [
  {
    name: 'home',
    icon: 'inbox'
  },
  {
    name: 'profile',
    icon: 'user'
  },
  {
    name: 'settings',
    icon: 'settings'
  }
]

function getSelectedTabProps(tab: string, currentTab: string) {
  if (tab === currentTab)
    return {
      className: 'border-t-2 border-t-neutral-800',
      color: colors.neutral[800]
    }

  return {
    className: '',
    color: colors.neutral[400]
  }
}

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
          const selectedProps = getSelectedTabProps(item.name, tab)

          return (
            <TouchableOpacity
              key={`tab-${item.name}`}
              className={`h-12 w-12 justify-center items-center ${selectedProps.className}`}
              onPress={() => handleChangeTap(item.name)}
            >
              <Feather
                name={item.icon as any}
                color={selectedProps.color}
                size={24}
              />
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
