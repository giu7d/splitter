import { Image, Text, TouchableOpacity, View } from 'react-native'

import FeatherIcon from '@expo/vector-icons/Feather'
import colors from 'tailwindcss/colors'

import MastercardLogoImage from '@assets/mastercard-logo.png'

export default function CreateBill() {
  return (
    <>
      {/* Payment Information */}
      <View className="flex-row justify-between items-center py-2">
        <View className="w-12 h-12 rounded-full bg-gray-200" />
        <Text className="flex-grow mx-4 font-semibold text-lg text-gray-800">
          Alex Lee
        </Text>
        <Text className="font-semibold text-lg text-gray-800">- $90.00</Text>
      </View>

      {/* Divider */}
      <View className="border-b-2 border-black w-full opacity-5 my-4" />

      {/* Information Label/Value */}
      <View className="py-4 gap-2">
        <Text className="font-semibold text-md text-gray-500">Status</Text>
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
            <Image source={MastercardLogoImage} className="h-5 w-8 -scale-75" />
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
          <Text className="text-md font-semibold text-blue-600">Invoice</Text>
        </TouchableOpacity>
        {/* Button MD */}
        <TouchableOpacity className="bg-gray-800 justify-center items-center p-4 rounded-xl flex-grow">
          <Text className="text-md font-semibold text-white">Send again</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
