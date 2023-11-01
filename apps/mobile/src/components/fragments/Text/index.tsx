import { Text as ReactNativeText } from 'react-native'

import TextPrice from './TextPrice'
import TextSubtitle from './TextSubtitle'
import TextTitle from './TextTitle'

const Text = {
  Title: TextTitle,
  Subtitle: TextSubtitle,
  Price: TextPrice,
  Default: ReactNativeText
}

export default Text
