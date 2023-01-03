import { Text, TouchableOpacity, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import colors from 'tailwindcss/colors'

import CreateBill from '@/components/container/CreateBill'
import FilterBills from '@/components/container/FilterBills'
import Header from '@/components/container/Header'
import ListBills from '@/components/container/ListBills'
import BaseTemplate from '@/components/templates/Base'
import DrawerTemplate from '@/components/templates/Drawer'
import useDrawer from '@/hooks/useDrawer'

function CreateBillButton() {
  const drawer = useDrawer()

  return (
    <LinearGradient
      className="absolute w-full p-6 pt-9 bottom-0"
      colors={[colors.white, 'rgba(255,255,255,0)']}
      start={{ y: 0.75, x: 0 }}
      end={{ y: 0, x: 0 }}
    >
      <View>
        {/* Button LG */}
        <TouchableOpacity
          className="bg-neutral-900 justify-center items-center p-5 rounded-2xl"
          onPress={() => drawer.show()}
        >
          <Text className="text-lg font-semibold text-white">
            Create new bill
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default function Bills() {
  return (
    <DrawerTemplate drawerComponent={<CreateBill />}>
      <>
        <BaseTemplate
          scrollViewProps={{
            className: 'gap-6'
          }}
          header={(isCompact) => (
            <LinearGradient
              colors={[colors.white, 'rgba(255,255,255,0)']}
              start={{ y: 0.7, x: 0 }}
              end={{ y: 1, x: 0 }}
            >
              <Header isCompact={isCompact} />
              <View className="p-6 pt-4">
                <FilterBills />
              </View>
            </LinearGradient>
          )}
        >
          {/* Card */}
          <View className="px-6">
            <ListBills />
          </View>
        </BaseTemplate>
        <CreateBillButton />
      </>
    </DrawerTemplate>
  )
}
