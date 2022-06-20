import { render, RenderResult } from 'test-utils'
import SortBySelect from './SortBySelect'

let documentBody: RenderResult

describe('Unit tests: <SortBySelect />', () => {
  it('renders', () => {
    documentBody = render(<SortBySelect />)
    expect(documentBody.getByText('Sort By :')).toBeVisible()
  })
})
