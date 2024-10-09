import { render } from '@redwoodjs/testing/web'

import IntervenantPage from './IntervenantPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IntervenantPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IntervenantPage />)
    }).not.toThrow()
  })
})
