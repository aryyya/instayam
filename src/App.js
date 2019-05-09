import React from 'react'
import './App.scss'

// CSS
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma'
import 'bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css'

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import NotFoundPage from './pages/not-found-page/not-found-page'
import LandingPage from './pages/landing-page/landing-page'
import LoginPage from './pages/login-page/login-page'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Landing Page */}
          <Route
            exact
            path="/"
            component={LandingPage}
          />
          {/* Login Page */}
          <Route
            path="/login"
            component={LoginPage}
          />
          {/* Not Found Page */}
          <Route
            path="/"
            component={NotFoundPage}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
