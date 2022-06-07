import { useAuth0 } from '@auth0/auth0-react'
import { render, RenderResult } from 'test-utils'
import UserMenuItem from './UserMenuItem'

let documentBody: RenderResult

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))
const mockUseAuth0 = useAuth0 as jest.Mock

jest.mock('./Login', () => () => <div data-testid="login" />)

describe('Unit tests: <UserMenuItem />', () => {
  it('renders when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
    })

    documentBody = render(<UserMenuItem />)

    expect(documentBody.getByTestId('login')).toBeVisible()
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

    documentBody = render(<UserMenuItem />)

    expect(documentBody.getByRole('img')).toBeVisible()
    expect(documentBody.getByText(`Hello, Jean!`)).toBeVisible()
  })
})
