import { render, RenderResult } from 'test-utils'
import NotFound from './NotFound'

let documentBody: RenderResult

describe('<NotFound />', () => {
  beforeEach(() => {
    documentBody = render(<NotFound />)
  })

  it('shows not found message', () => {
    expect(documentBody.getByText('Not Found')).toBeInTheDocument()
    expect(documentBody.getByText('404')).toBeInTheDocument()
    expect(documentBody.getByTitle('content')).toContainElement(
      documentBody.getByText('Not Found')
    )
    expect(documentBody.getByText('404')).toBe
  })
})
