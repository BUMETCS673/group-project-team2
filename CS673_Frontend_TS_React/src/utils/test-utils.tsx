import '@testing-library/jest-dom'
import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { appTheme } from '../styles/app-theme'

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
