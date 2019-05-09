import React from 'react'

import { Link } from 'react-router-dom'

import InstayamTitle from '../../../common/instayam-title/instayam-title'
import { EntryBox, EntryBoxTop, EntryBoxBottom } from '../entry-box/entry-box'
import SignUpForm from './sign-up-form/sign-up-form'

const SignUpBox = () => {
  return (
    <EntryBox>
      <EntryBoxTop>
        <InstayamTitle />
        <p className="is-size-6 has-text-grey mb-20">Sign up to see photos and videos from your friends.</p>
        <button className="button is-info is-fullwidth has-text-weight-semibold">
          <span className="icon is-large">
            <i className="fab fa-facebook-square" />
          </span> {/* icon */}
          <span>Login with Facebook</span>
        </button> {/* button */}
        <div className="is-divider" data-content="OR" />
        <SignUpForm />
        <p className="has-text-grey mt-20">By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
      </EntryBoxTop>
      <EntryBoxBottom>
        <p>Have an account? <Link className="has-text-info" to="/login">Log in</Link></p>
      </EntryBoxBottom>
    </EntryBox>
  )
}

export default SignUpBox
