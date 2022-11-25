import { StatusBar } from 'expo-status-bar'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'
import { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <StatusBar style="light" />
      <MotiView
        onTouchEnd={() => setIsLoading((state) => !state)}
        className="flex-1 p-6 items-center justify-center bg-gray-800 gap-5"
        from={{ opacity: 0, top: 500 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{
          type: 'timing',
          duration: 1500,
          delay: 100
        }}
      >
        <View>
          <Skeleton
            height={54}
            width={54}
            radius="round"
            colors={[
              colors.gray[700],
              colors.gray[900],
              colors.gray[800],
              colors.gray[600]
            ]}
          >
            {!isLoading && (
              <View className="bg-gray-500 h-24 w-24 justify-center items-center rounded-full">
                <Text className=" text-white font-bold text-4xl">G</Text>
              </View>
            )}
          </Skeleton>
        </View>
        <View>
          <Skeleton
            width={`100%`}
            colors={[
              colors.gray[700],
              colors.gray[900],
              colors.gray[800],
              colors.gray[600]
            ]}
          >
            {!isLoading && (
              <Text className="text-white font-bold self-center">
                Open up App.js to start working on your app!
              </Text>
            )}
          </Skeleton>
        </View>
      </MotiView>
    </>
  )
}
