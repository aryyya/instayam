import React from 'react'

import SignUpForm from './sign-up-form'

const LandingPage = () => {
  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-narrow">
              <SignUpForm />
            </div>
          </div>
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
