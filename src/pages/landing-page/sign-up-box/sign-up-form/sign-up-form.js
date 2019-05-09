import React, { useState } from 'react'

const invalidInputIcon = (
  <span className="icon is-right has-text-danger">
    <i className="far fa-times-circle" />
  </span>
)

const hasErrors = errors => {
  return errors.email || errors.fullName || errors.username || errors.password
}

const getFirstError = errors => {
  if (errors.email) return errors.email
  if (errors.fullName) return errors.fullName
  if (errors.username) return errors.username
  if (errors.password) return errors.password
}

const SignUpForm = () => {
  const [ errors, setErrors ] = useState({})

  const signUp = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const email = formData.get('email')
    const fullName = formData.get('fullName')
    const username = formData.get('username')
    const password = formData.get('password')

    const errors = {}

    if (email.length < 1) {
      errors.email = 'Your email is required.'
    }

    if (username.length < 6) {
      errors.username = 'Your username must be 6 characters long or greater.'
    }

    if (username.length < 1) {
      errors.username = 'Your username is required.'
    }

    if (password.length < 8) {
      errors.password = 'Your password must be 8 characters long or greater.'
    }

    setErrors(errors)

    if (!hasErrors(errors)) {
      console.log('Submitting form:', { email, fullName, username, password })
    }
  }

  return (
    <form
      className="form"
      onSubmit={signUp}
      onChange={() => setErrors({})}
    >
      <div className="field mb-8">
        <div className="control has-icons-right">
          <input
            className="sign-up-form__input input has-background-light is-shadowless br-2"
            name="email"
            placeholder="Email"
          />
          {errors.email ? invalidInputIcon : null}
        </div> {/* control */}
      </div> {/* field */}
      <div className="field mb-8">
        <div className="control has-icons-right">
          <input
            className="sign-up-form__input input has-background-light is-shadowless br-2"
            name="fullName"
            placeholder="Full Name"
          />
          {errors.fullName ? invalidInputIcon : null}
        </div> {/* control */}
      </div> {/* field */}
      <div className="field mb-8">
        <div className="control has-icons-right">
          <input
            className="sign-up-form__input input has-background-light is-shadowless br-2"
            name="username"
            placeholder="Username"
          />
          {errors.username ? invalidInputIcon : null}
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
          {errors.password ? invalidInputIcon : null}
        </div> {/* control */}
      </div> {/* field */}
      <button className="button is-info is-fullwidth has-text-weight-semibold">Sign up</button>
      {hasErrors(errors) ? <p className="has-text-danger mt-20">{getFirstError(errors)}</p> : null}
    </form>
  )
}

export default SignUpForm
