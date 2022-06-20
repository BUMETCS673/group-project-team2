import { useAuth0 } from '@auth0/auth0-react'
import { getDefaultNormalizer, render, RenderResult } from 'test-utils'
import User from './User'

let documentBody: RenderResult

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))
const mockUseAuth0 = useAuth0 as jest.Mock

describe('Unit tests: <User />', () => {
  it('renders when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
    })

    documentBody = render(<User />)

    expect(
      documentBody.getByText(' Not loggedIn ', {
        normalizer: getDefaultNormalizer({ trim: false }),
      })
    ).toBeVisible()
  })

  it('renders when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: {
        picture: 'https://i.stack.imgur.com/l60Hf.png',
        given_name: 'Jean',
        email: 'jean@test.com',
      },
      isAuthenticated: true,
    })

    documentBody = render(<User />)

    expect(documentBody.getByText('Info')).toBeVisible()
    expect(documentBody.getByRole('img')).toBeVisible()
    expect(documentBody.getByText(`Hello, Jean!`)).toBeVisible()
    expect(documentBody.getByText('jean@test.com')).toBeVisible()
  })
})
