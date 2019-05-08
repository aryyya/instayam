import React from 'react'

const SignUpForm = () => {
  return (
    <form className="form">
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Email"
        />
      </div> {/* field */}
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Full Name"
        />
      </div> {/* field */}
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Username"
        />
      </div> {/* field */}
      <div className="field">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Password"
        />
      </div> {/* field */}
      <button className="button is-info is-fullwidth has-text-weight-semibold">Sign up</button>
    </form>
  )
}

export default SignUpForm
