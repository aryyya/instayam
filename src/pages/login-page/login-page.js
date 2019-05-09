import React from 'react'

import LoginBox from './login-box/login-box'

const LoginPage = () => {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <LoginBox />
            </div> {/* column */}
          </div> {/* columns */}
        </div> {/* container */}
      </div> {/* hero-body */}
    </section>
  )
}

export default LoginPage
