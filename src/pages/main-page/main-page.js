import React from 'react'

import TopNavigationBar from './top-navigation-bar/top-navigation-bar'

const MainPage = () => {
  return (
    <div>
      <TopNavigationBar />
      <section className="section has-background-light hero is-fullheight-with-navbar">
        <div className="container">
          Hello, world!
        </div>
      </section>
    </div>
  )
}

export default MainPage
