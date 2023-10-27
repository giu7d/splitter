import render from '@/services/utils/tests/render'

import CreateBill from '.'

describe('<CreateBill />', () => {
  it('renders correctly', () => {
    const component = render(<CreateBill />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
