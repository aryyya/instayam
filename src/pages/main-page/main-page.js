import React from 'react'

import TopNavigationBar from './top-navigation-bar/top-navigation-bar'

const MainPage = () => {
  return (
    <div className="has-navbar-fixed-top">
      <TopNavigationBar />
      <section className="section has-background-white-bis hero is-fullheight-with-navbar">
        <div className="container">
          Hello, world!
        </div>
      </section>
    </div>
  )
}

export default MainPage
