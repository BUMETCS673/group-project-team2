import { getDefaultNormalizer, render, RenderResult } from 'test-utils'
import User from './User'

let documentBody: RenderResult

// cases defined two times because the useAuth0() hook is executed twice
// tried using different implementations for each test case but haven't succeed as of now
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
}))

describe('Unit tests: <User />', () => {
  beforeEach(() => {
    documentBody = render(<User />)
  })

  it('renders correctly when not authenticated', () => {
    expect(
      documentBody.getByText(' Not loggedIn ', {
        normalizer: getDefaultNormalizer({ trim: false }),
      })
    ).toBeInTheDocument()
  })

  it('renders correctly when authenticated', () => {
    expect(documentBody.getByText('Info')).toBeInTheDocument()
  })
})
