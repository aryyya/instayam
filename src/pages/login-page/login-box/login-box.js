import React from 'react'

import { Link } from 'react-router-dom'

import InstayamTitle from '../../../common/instayam-title/instayam-title'
import { EntryBox, EntryBoxTop, EntryBoxBottom } from '../../../common/entry-box/entry-box'
import LoginForm from './login-form/login-form'

const LoginBox = () => {
  return (
    <EntryBox>
      <EntryBoxTop>
        <InstayamTitle />
        <LoginForm />
        <div className="is-divider" data-content="OR" />
        <button className="button is-fullwidth has-text-weight-semibold has-text-info">
          <span className="icon is-large">
            <i className="fab fa-facebook-square" />
          </span> {/* icon */}
          <span>Login with Facebook</span>
        </button> {/* button */}
      </EntryBoxTop>
      <EntryBoxBottom>
        <p>Don't have an account? <Link className="has-text-info" to="/">Sign up</Link></p>
      </EntryBoxBottom>
    </EntryBox>
  )
}

export default LoginBox
