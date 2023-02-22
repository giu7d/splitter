import renderWithProvider from '@/config/render'
import Bills from '@/screens/Bills'

describe('<Bills />', () => {
  it('renders correctly', () => {
    const component = renderWithProvider(<Bills />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
