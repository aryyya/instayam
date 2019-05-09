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

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* Landing Page (Sign Up) */}
          <Route
            path="/"
            exact
            component={LandingPage}
          />
          {/* Landing Page (Login) */}
          <Route
            path="/login"
            component={LandingPage}
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
