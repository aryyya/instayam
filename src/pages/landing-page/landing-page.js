import React from 'react'

import SignUpBox from './sign-up-box/sign-up-box'

const LandingPage = () => {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <SignUpBox />
            </div> {/* column */}
          </div> {/* columns */}
        </div> {/* container */}
      </div> {/* hero-body */}
      <div className="hero-foot">
        <div className="container">
          {/* <p className="has-text-centered">This is the footer.</p> */}
        </div> {/* container */}
      </div> {/* hero-foot */}
    </section>
  )
}

export default LandingPage
