import React from 'react'
import classnames from 'classnames'

import { withRouter } from 'react-router-dom'

import { errorIcon } from '../../../../common/icons/icons'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const LoginForm = ({
  history
}) => {

  const initialValues = {
    email: '',
    password: ''
  }

  const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Your email is required.'
    }
    if (!values.password) {
      errors.password = 'Your password is required.'
    }
    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2))
      setSubmitting(false)
      history.push('/feed')
    }, 2500)
  }

  const render = ({ isSubmitting }) => (
    <Form>
      {/* Email */}
      <div className="field mb-8">
        <div className="control has-icons-right">
          <Field
            className="input has-background-white-bis is-shadowless br-2"
            type="text"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" render={() => errorIcon} />
        </div> {/* control */}
      </div> {/* field */}
      {/* Password */}
      <div className="field">
        <div className="control has-icons-right">
          <Field
            className="input has-background-white-bis is-shadowless br-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" render={() => errorIcon} />
        </div> {/* control */}
      </div> {/* field */}
      {/* Submit */}
      <button
        className={classnames(
          'button is-fullwidth is-info has-text-weight-semibold',
          { 'is-loading' : isSubmitting }
        )}
        type="submit"
        disabled={isSubmitting}
      >
        Log In
      </button>
      <ErrorMessage className="has-text-danger mt-20" name="email" component="p" />
      <ErrorMessage className="has-text-danger mt-20" name="password" component="p" />
    </Form>
  )

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      render={render}
      validateOnBlur={false}
    />
  )
}

export default withRouter(LoginForm)
