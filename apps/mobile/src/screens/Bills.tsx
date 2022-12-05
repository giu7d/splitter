import { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import colors from 'tailwindcss/colors'

import FilterBills from '@/components/container/FilterBills'
import Header from '@/components/container/Header'
import ListBills from '@/components/container/ListBills'

export default function Bills() {
  const [state, setState] = useState(false)

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-grow">
        {/* Header */}
        <Header isCompact={state} />
        {/* Content */}
        <ScrollView
          className="gap-6"
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 200
          }}
          stickyHeaderIndices={[0]}
          scrollEventThrottle={1000}
          onScroll={(e) => {
            if (e.nativeEvent.contentOffset.y < 5) {
              setState(false)
            } else {
              setState(true)
            }
          }}
        >
          {/* Filter */}
          <LinearGradient
            className="p-6"
            colors={[colors.white, 'rgba(255,255,255,0)']}
            start={{ y: 0.5, x: 0 }}
            end={{ y: 1, x: 0 }}
          >
            <FilterBills />
          </LinearGradient>
          {/* Card */}
          <View className="px-6">
            <ListBills />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
