import 'react-native-gesture-handler'

import Provider from '@/providers'
import Bills from '@/screens/Bills'

export default function App() {
  return (
    <Provider>
      <Bills />
    </Provider>
  )
}
