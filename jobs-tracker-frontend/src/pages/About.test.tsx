import { fireEvent, render, RenderResult } from 'test-utils'
import { About } from './About'

let documentBody: RenderResult

describe('Unit tests: <About />', () => {
  it('renders', () => {
    documentBody = render(<About />)

    const header = documentBody.getByRole('heading', { level: 1 })
    expect(header).toBeVisible()
    expect(header).toHaveTextContent('About')

    expect(documentBody.getByTestId('content')).toBeVisible()

    expect(documentBody.getByRole('button', { name: 'Go back' })).toBeVisible()
  })

  it('"Go back" button', () => {
    documentBody = render(<About />)

    const button = documentBody.getByRole('button', { name: 'Go back' })
    fireEvent.click(button)
    expect(global.window.location.pathname).toBe('/')
  })
})
