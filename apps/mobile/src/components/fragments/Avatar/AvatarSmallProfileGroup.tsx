import {
  Image,
  ImageProps,
  ImageSourcePropType,
  Text,
  View
} from 'react-native'

import classNames from 'classnames'

type Props = {
  sources?: ImageSourcePropType[]
  imageProps?: Omit<ImageProps, 'source'>
}

export default function ImageSmallProfileGroup({
  sources = [
    { uri: 'https://avatars.githubusercontent.com/u/30274817?v=4' },
    { uri: 'https://avatars.githubusercontent.com/u/30274817?v=4' },
    { uri: 'https://avatars.githubusercontent.com/u/30274817?v=4' },
    { uri: 'https://avatars.githubusercontent.com/u/30274817?v=4' },
    { uri: 'https://avatars.githubusercontent.com/u/30274817?v=4' }
  ],
  imageProps = {}
}: Props) {
  const getSourcePreviews = () => sources.slice(0, 3)

  const getNegativeMarginLeftStyle = (index: number) => {
    if (index !== 0) return '-ml-3'
    return 'ml-0'
  }

  const isMoreItemsVisible = sources.length > 3

  return (
    <View className="flex-row my-2">
      {getSourcePreviews().map((source, index) => (
        <Image
          key={`profile-group-${index}`}
          className={classNames(
            'bg-neutral-200 w-5 h-5 rounded-full opacity-75',
            getNegativeMarginLeftStyle(index)
          )}
          source={source}
          {...imageProps}
        />
      ))}
      {isMoreItemsVisible && (
        <View className="bg-neutral-500 w-5 h-5 rounded-full items-center justify-center -ml-3">
          <Text className="text-white text-xs">+{sources.length - 3}</Text>
        </View>
      )}
    </View>
  )
}
