import { getDefaultNormalizer, render, RenderResult } from 'test-utils'
import User from './User'

let documentBody: RenderResult

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      user: undefined,
      isAuthenticated: false,
    })
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      user: {
        picture: 'https://i.stack.imgur.com/l60Hf.png',
        given_name: 'Jean',
        email: 'jean@test.com',
      },
      isAuthenticated: true,
    }),
  // cases defined two times because the useAuth0() hook is executed twice
  // tried using different implementations for each test case but haven't succeed as of now
}))

describe('Unit tests: <User />', () => {
  beforeEach(() => {
    documentBody = render(<User />)
  })

  it('renders when not authenticated', () => {
    expect(
      documentBody.getByText(' Not loggedIn ', {
        normalizer: getDefaultNormalizer({ trim: false }),
      })
    ).toBeInTheDocument()
  })

  it('renders when authenticated', () => {
    expect(documentBody.getByText('Info')).toBeVisible()
    expect(documentBody.getByRole('img')).toBeVisible()
    expect(documentBody.getByText(`Hello, Jean!`)).toBeVisible()
    expect(documentBody.getByText('jean@test.com')).toBeVisible()
  })
})
