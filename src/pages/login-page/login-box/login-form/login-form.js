import React from 'react'

const LoginForm = () => {
  return (
    <form className="form">
      <div className="field mb-8">
        <div className="control has-icons-right">
          <input
            className="sign-up-form__input input has-background-light is-shadowless br-2"
            name="email"
            placeholder="Email"
          />
        </div> {/* control */}
      </div> {/* field */}
      <div className="field">
        <div className="control has-icons-right">
          <input
            className="sign-up-form__input input has-background-light is-shadowless br-2"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div> {/* control */}
      </div> {/* field */}
      <button className="button is-info is-fullwidth has-text-weight-semibold">Log In</button>
    </form>
  )
}

export default LoginForm
