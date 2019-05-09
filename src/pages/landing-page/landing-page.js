import React from 'react'

import { Route, Switch } from 'react-router-dom'

import SignUpBox from './sign-up-box/sign-up-box'
import LoginBox from './login-box/login-box'

const LandingPage = () => {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Switch>
                <Route
                  path="/"
                  exact
                  component={SignUpBox}
                />
                <Route
                  path="/login"
                  component={LoginBox}
                />
              </Switch>
            </div> {/* column */}
          </div> {/* columns */}
        </div> {/* container */}
      </div> {/* hero-body */}
      <div className="hero-foot">
        <div className="container">
          <p className="has-text-centered">2019</p>
        </div> {/* container */}
      </div> {/* hero-foot */}
    </section>
  )
}

export default LandingPage
