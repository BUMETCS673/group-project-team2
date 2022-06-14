import { useAuth0 } from '@auth0/auth0-react'
import { fireEvent, render, RenderResult } from 'test-utils'
import NavMenuItems from './NavMenuItems'
import { ReactNode, ComponentProps } from 'react'
import { StyledNavLink } from 'styles/styles'
import { NavLinkProps } from 'react-router-dom'

let documentBody: RenderResult

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))
const mockUseAuth0 = useAuth0 as jest.Mock

jest.mock('../styles/styles', () => ({
  MenuLinkGroup: ({ children }: { children: ReactNode }) => {
    return <div data-testid="MockMenuLinkGroup">{children}</div>
  },
  StyledNavLink: ({ children }: { children: ReactNode }) => {
    return <div data-testid="MockStyledNavLink">{children}</div>
  },
}))

jest.mock('./Login', () => () => <div data-testid="MockLogin" />)
jest.mock('./Logout', () => () => <div data-testid="MockLogout" />)

describe('Unit tests: <NavMenuItems />', () => {
  it('renders when not authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: undefined,
      isAuthenticated: false,
    })

    documentBody = render(<NavMenuItems />)

    expect(documentBody.getByTestId('MockStyledNavLink')).toBeVisible()
    expect(documentBody.getByTestId('MockLogin')).toBeVisible()
  })

  it('renders when authenticated', () => {
    mockUseAuth0.mockReturnValue({
      user: {
        name: 'Jean',
      },
      isAuthenticated: true,
    })

    documentBody = render(<NavMenuItems />)

    expect(documentBody.getByText('Jean')).toBeVisible()
    expect(documentBody.getByText('Home')).toBeVisible()
    expect(documentBody.getByText('Our Mission')).toBeVisible()
    expect(documentBody.getByTestId('MockLogout')).toBeVisible()
  })
})
