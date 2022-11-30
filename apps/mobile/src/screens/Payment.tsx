import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

import FeatherIcon from '@expo/vector-icons/Feather'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView } from 'moti'
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

import { trpc } from '@/services/api'
import BackgroundGradientImage from '@assets/background-gradient.png'
import MastercardLogoImage from '@assets/mastercard-logo.png'

const screen = Dimensions.get('screen')

const Payment = gestureHandlerRootHOC(() => {
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

  const animatedRootStyles = useAnimatedStyle(() => {
    const scale = bottomSheetAbsoluteY.value / 800
    const minScale = 0.92
    const maxScale = 1

    const isSmallerThanScale = scale <= minScale
    const isBetweenScale = scale >= minScale && scale <= maxScale

    if (isBetweenScale)
      return {
        top: withSpring(25),
        transform: [
          {
            scale
          }
        ]
      }

    if (isSmallerThanScale)
      return {
        top: withSpring(25),
        transform: [
          {
            scale: minScale
          }
        ]
      }

    return {
      top: withSpring(0),
      transform: [
        {
          scale: maxScale
        }
      ]
    }
  })

  const data = trpc.post.byId.useQuery('hello-world')

  if (!data.data) return <></>

  console.log(data.data)

  return (
    <>
      <StatusBar style="dark" />
      <Animated.View className="flex-grow h-full w-full bg-black">
        <Animated.Image
          className="w-full h-full self-center bg-white overflow-hidden rounded-t-3xl"
          source={BackgroundGradientImage}
          style={animatedRootStyles}
        />
        <Animated.View
          style={animatedRootStyles}
          className="absolute bg-white w-full h-full opacity-50 rounded-t-3xl"
        />
        <SafeAreaView
          style={animatedRootStyles}
          className="absolute w-full h-full"
        >
          <ScrollView stickyHeaderIndices={[0]}>
            {/* Header */}
            <View className="p-6">
              <TouchableOpacity className="bg-gray-200 w-12 h-12 justify-center items-center rounded-full opacity-75  ">
                <FeatherIcon
                  name="chevron-left"
                  color={colors.gray[500]}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            {/* Content 1 */}
            <View className="flex-grow items-center mb-10">
              {/* <Image
              className="w-24 h-24 rounded-full mb-3"
              source={{ uri: 'https://via.placeholder.com/400x200' }}
            /> */}
              <View
                className="w-24 h-24 rounded-full mb-3 bg-gray-800"
                onTouchEnd={() =>
                  (bottomSheetAbsoluteY.value = withTiming(screen.height))
                }
              />

              <View className="flex-grow items-center">
                <Text className="font-semibold text-2xl text-gray-700 mb-1">
                  Robert Tims
                </Text>
                <Text className="font-semibold text-sm text-gray-500">
                  Receives
                </Text>
              </View>
            </View>

            {/* Cards Content */}
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 24,
                paddingVertical: 24,
                overflow: 'visible'
              }}
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              {[0].map((key) => (
                <TouchableOpacity
                  key={key}
                  className="flex-row h-24 w-72 mx-3 justify-between items-center self-center bg-white p-5 rounded-2xl shadow-md"
                >
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
                    <Text className="text-sm text-gray-500">
                      Ending in 9999
                    </Text>
                  </View>
                  <FeatherIcon
                    name="chevron-right"
                    color={colors.gray[400]}
                    size={24}
                  />
                </TouchableOpacity>
              ))}
              <TouchableOpacity className="flex-row h-24 w-24 mx-3 justify-center items-center self-center  bg-gray-800 p-5 rounded-2xl shadow-md">
                <FeatherIcon name="plus" color={colors.gray[100]} size={24} />
              </TouchableOpacity>
            </ScrollView>

            {/* Price Content */}
            <View className="flex-grow my-12">
              <View className="flex-row self-center">
                <Text className="text-5xl font-bold text-gray-800">$ 90</Text>
                <Text className="text-5xl font-bold text-gray-500 opacity-30">
                  .00
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Button Area */}
          <View className="absolute bottom-0 w-full p-6">
            {/* Button LG */}
            <TouchableOpacity
              className="bg-gray-800 justify-center items-center p-5 rounded-2xl"
              onPress={() =>
                (bottomSheetAbsoluteY.value = withSpring(screen.height / 3))
              }
            >
              <Text className="text-lg font-semibold text-white">
                Send money
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
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

export default Payment
