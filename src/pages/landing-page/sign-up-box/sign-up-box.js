import React from 'react'
import './sign-up-box.scss'

import { Link } from 'react-router-dom'

import SignUpForm from './sign-up-form/sign-up-form'

const SignUpBox = () => {
  return (
    <div className="sign-up-box has-text-centered">
      <div className="sign-up-box__top card mb-12">
        <div className="card-content">
          <h1 className="sign-up-box__title title is-size-2">Instayam</h1>
          <p className="subtitle is-size-6 has-text-grey">Sign up to see photos and videos from your friends.</p>
          <button className="button is-info is-fullwidth">Login with Facebook</button>
          <div className="is-divider" data-content="OR"></div>
          <SignUpForm />
          <p className="has-text-grey mt-20">By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
        </div> {/* card-content */}
      </div> {/* sign-up-box__top */}
      <div className="sign-up-box__bottom card">
        <div className="card-content">
          <p>Have an account? <Link className="has-text-info" to="/login">Log in</Link></p>
        </div> {/* card-content */}
      </div> {/* sign-up-box__bottom */}
    </div>
  )
}

export default SignUpBox
