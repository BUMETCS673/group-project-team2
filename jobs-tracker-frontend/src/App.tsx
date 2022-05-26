import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { appTheme } from "./styles/app-theme";
import { ThemeProvider } from "styled-components";
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import Loading from './pages/Loading'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme = {appTheme}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Loading} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
