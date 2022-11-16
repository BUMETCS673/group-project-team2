import { render, RenderResult } from 'test-utils'
import NoJobs from './NoJobs'

let documentBody: RenderResult

describe('Unit tests: <NoJobs />', () => {
  it('renders', () => {
    documentBody = render(<NoJobs />)

    expect(documentBody.getByRole('heading', { level: 2 })).toBeVisible()
    expect(documentBody.getByRole('heading', { level: 2 })).toHaveTextContent(
      'You are currently not tracking any jobs.'
    )

    expect(
      documentBody.getByText('Good Luck for the job search!')
    ).toBeVisible()
  })
})
