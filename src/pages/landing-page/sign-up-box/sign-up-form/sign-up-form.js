import React from 'react'

const SignUpForm = () => {
  return (
    <form className="form">
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Email"
        />
      </div>
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Full Name"
        />
      </div>
      <div className="field mb-8">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Username"
        />
      </div>
      <div className="field">
        <input
          className="sign-up-form__input input has-background-light is-shadowless br-2"
          placeholder="Password"
        />
      </div>
      <button className="button is-info is-fullwidth">Sign up</button>
    </form>
  )
}

export default SignUpForm
