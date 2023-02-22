import { render } from '@testing-library/react-native'

import Provider from '@/providers'

export default function renderWithProvider({ children }: any) {
  return render(<Provider>{children}</Provider>)
}
