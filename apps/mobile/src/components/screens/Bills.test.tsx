import render from '@config/render'

import Bills from '@/components/screens/Bills'

describe('<Bills />', () => {
  it('renders correctly', () => {
    const component = render(<Bills />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
