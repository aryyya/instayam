import React from 'react'

const SignUpForm = () => {
  return (
    <div className="card has-text-centered" style={{ width: '350px' }}>
      <div className="card-content">
        <h1 className="title is-size-2" style={{ fontFamily: 'Pacifico' }}>Instayam</h1>
        <p className="subtitle is-size-6 has-text-grey">Sign up to see photos and videos from your friends.</p>
        <button className="button is-info is-fullwidth">Login with Facebook</button>
        <div className="is-divider" data-content="OR"></div>
        <div className="field" style={{marginBottom: '8px'}}>
          <input className="input has-background-light" style={{borderRadius: '2px', boxShadow: 'none' }} placeholder="Email"></input>
        </div>
        <div className="field" style={{marginBottom: '8px'}}>
          <input className="input has-background-light" style={{borderRadius: '2px', boxShadow: 'none' }} placeholder="Full Name"></input>
        </div>
        <div className="field" style={{marginBottom: '8px'}}>
          <input className="input has-background-light" style={{borderRadius: '2px', boxShadow: 'none' }} placeholder="Username"></input>
        </div>
        <div className="field">
          <input className="input has-background-light" style={{borderRadius: '2px', boxShadow: 'none' }} placeholder="Password"></input>
        </div>
        <button className="button is-info is-fullwidth">Sign up</button>
        <p className="has-text-grey" style={{ marginTop: '20px' }}>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</p>
      </div>
    </div>
  )
}

export default SignUpForm
