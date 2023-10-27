import { render as renderWithTestingLibrary } from '@testing-library/react-native'

import Provider from '@/providers'

export default function render({ children }: any) {
  return renderWithTestingLibrary(<Provider>{children}</Provider>)
}
