import { View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import colors from 'tailwindcss/colors'

import CreateBill from '@/components/container/CreateBill'
import FilterBills from '@/components/container/FilterBills'
import Header from '@/components/container/Header'
import ListBills from '@/components/container/ListBills'
import BaseTemplate from '@/components/templates/Base'

export default function Bills() {
  return (
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
      <CreateBill />
    </>
  )
}
