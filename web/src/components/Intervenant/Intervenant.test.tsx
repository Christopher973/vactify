import { render } from '@redwoodjs/testing/web'

import Intervenant from './Intervenant'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Intervenant', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Intervenant />)
    }).not.toThrow()
  })
})
