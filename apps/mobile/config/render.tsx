import { render as testingLibraryRender } from '@testing-library/react-native'

import Provider from '@/providers'

export default function render({ children }: any) {
  return testingLibraryRender(<Provider>{children}</Provider>)
}
