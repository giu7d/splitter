import render from '@config/render'

import CreateBill from '.'

describe('<CreateBill />', () => {
  it('renders correctly', () => {
    const component = render(<CreateBill />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
