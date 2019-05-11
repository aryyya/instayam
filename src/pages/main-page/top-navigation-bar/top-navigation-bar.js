import React from 'react'
import './top-navigation-bar.scss'

import InstayamTitle from '../../../common/instayam-title/instayam-title'

const TopNavigationBar = () => {
  return (
    <nav className="top-navigation-bar navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <InstayamTitle isSmall />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopNavigationBar
