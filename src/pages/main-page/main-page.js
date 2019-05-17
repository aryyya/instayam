import React from 'react'

import TopNavigationBar from './top-navigation-bar/top-navigation-bar'

import { connect } from 'react-redux'

const MainPage = ({
  user
}) => {
  return (
    <div className="has-navbar-fixed-top">
      <TopNavigationBar />
      <section className="section has-background-white-bis hero is-fullheight-with-navbar">
        <div className="container">
          Hello, world! The user is {user.isLoggedIn ? 'logged in' : 'logged out'}.
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(MainPage)
