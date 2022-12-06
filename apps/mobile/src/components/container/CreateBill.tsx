import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

import FeatherIcon from '@expo/vector-icons/Feather'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'moti'
import {
  PanGestureHandler,
  gestureHandlerRootHOC
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

import MastercardLogoImage from '@assets/mastercard-logo.png'

const screen = Dimensions.get('screen')

const CreateBill = gestureHandlerRootHOC(() => {
  const bottomSheetAbsoluteY = useSharedValue(screen.height)

  const _onPanHandlerStateChange = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = bottomSheetAbsoluteY.value
    },
    onActive: (event: any, _ctx: any) => {
      if (event.absoluteY >= 150) {
        bottomSheetAbsoluteY.value = withSpring(event.absoluteY)
      }
    },
    onEnd: (event) => {
      if (event.absoluteY >= screen.height - 300) {
        bottomSheetAbsoluteY.value = withTiming(screen.height)
      }
    }
  })

  const animatedBottomSheetStyles = useAnimatedStyle(() => {
    return {
      height: screen.height - bottomSheetAbsoluteY.value
      // transform: [{ translateY: fabPositionY.value }]
    }
  })

  // const animatedRootStyles = useAnimatedStyle(() => {
  //   const scale = bottomSheetAbsoluteY.value / 800
  //   const minScale = 0.92
  //   const maxScale = 1

  //   const isSmallerThanScale = scale <= minScale
  //   const isBetweenScale = scale >= minScale && scale <= maxScale

  //   if (isBetweenScale)
  //     return {
  //       top: withSpring(25),
  //       transform: [
  //         {
  //           scale
  //         }
  //       ]
  //     }

  //   if (isSmallerThanScale)
  //     return {
  //       top: withSpring(25),
  //       transform: [
  //         {
  //           scale: minScale
  //         }
  //       ]
  //     }

  //   return {
  //     top: withSpring(0),
  //     transform: [
  //       {
  //         scale: maxScale
  //       }
  //     ]
  //   }
  // })

  return (
    <>
      {/* Button Area */}
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
            onPress={() =>
              (bottomSheetAbsoluteY.value = withSpring(screen.height / 8, {
                damping: 15
              }))
            }
          >
            <Text className="text-lg font-semibold text-white">
              Create new bill
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* Bottom Sheet */}
      <PanGestureHandler onHandlerStateChange={_onPanHandlerStateChange}>
        <Animated.View
          className="absolute w-full bg-white bottom-0 rounded-t-3xl shadow-lg"
          style={animatedBottomSheetStyles}
        >
          <View className="h-1 w-8 my-4 rounded-full bg-black self-center opacity-10" />
          <ScrollView className="flex-grow px-6">
            {/* Payment Information */}
            <View className="flex-row justify-between items-center py-2">
              <View className="w-12 h-12 rounded-full bg-gray-200" />
              <Text className="flex-grow mx-4 font-semibold text-lg text-gray-800">
                Alex Lee
              </Text>
              <Text className="font-semibold text-lg text-gray-800">
                - $90.00
              </Text>
            </View>

            {/* Divider */}
            <View className="border-b-2 border-black w-full opacity-5 my-4" />

            {/* Information Label/Value */}
            <View className="py-4 gap-2">
              <Text className="font-semibold text-md text-gray-500">
                Status
              </Text>
              <View>
                <View className="flex-row items-center gap-2">
                  <View className="bg-green-500 w-6 h-6 items-center justify-center rounded-full">
                    <FeatherIcon name="check" color={colors.white} />
                  </View>
                  <Text className="font-semibold text-md text-gray-800">
                    Successful
                  </Text>
                </View>
              </View>
            </View>

            {/* Information Label/Value */}
            <View className="py-4 gap-2">
              <Text className="font-semibold text-md text-gray-500">Date</Text>
              <Text className="font-semibold text-md text-gray-800">
                Aug 30, 2022 at 8:36pm
              </Text>
            </View>

            {/* Information Label/Value */}
            <View className="py-4 gap-2">
              <Text className="font-semibold text-md text-gray-500">
                Payment method
              </Text>
              <View className="p-4 flex-row items-center bg-gray-100 rounded-2xl">
                <View className="h-12 w-12 bg-gray-700 rounded-full items-center justify-center">
                  <Image
                    source={MastercardLogoImage}
                    className="h-5 w-8 -scale-75"
                  />
                </View>
                <View className="flex-grow px-4">
                  <Text className="font-semibold text-sm text-gray-900">
                    Mastercard
                  </Text>
                  <Text className="text-sm text-gray-500">Ending in 9999</Text>
                </View>
              </View>
            </View>

            {/* Button Area */}
            <View className="py-4 gap-2 flex-row">
              {/* Button MD */}
              <TouchableOpacity className="bg-blue-100 justify-center items-center p-4 rounded-xl flex-grow">
                <Text className="text-md font-semibold text-blue-600">
                  Invoice
                </Text>
              </TouchableOpacity>
              {/* Button MD */}
              <TouchableOpacity className="bg-gray-800 justify-center items-center p-4 rounded-xl flex-grow">
                <Text className="text-md font-semibold text-white">
                  Send again
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </>
  )
})

export default CreateBill
