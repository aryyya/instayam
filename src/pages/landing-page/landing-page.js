import React from 'react'

import SignUpBox from './sign-up-box/sign-up-box'

const LandingPage = () => {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <SignUpBox />
            </div> {/* column */}
          </div> {/* columns */}
        </div> {/* container */}
      </div> {/* hero-body */}
      <div className="hero-foot">
        <div className="container">
          This is the footer.
        </div> {/* container */}
      </div> {/* hero-foot */}
    </section>
  )
}

export default LandingPage
