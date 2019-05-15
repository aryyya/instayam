import React from 'react'
import './top-navigation-bar.scss'

import InstayamTitle from '../../../common/instayam-title/instayam-title'
import SearchBar from './search-bar/search-bar'

const renderDesktop = () => {
  return (
    <nav className="top-navigation-bar navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <span className="icon is-medium">
              <i className="fa-lg fab fa-instagram"></i>
            </span>
            <div className="top-navigation-bar__logo-separator ml-11 mr-17"></div>
            <InstayamTitle isSmall />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="top-navigation-bar__center navbar-start">
            <div className="navbar-item is-hidden-mobile">
              <SearchBar />
            </div>
            <div className="navbar-item is-hidden-desktop">
              <InstayamTitle isSmall />
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <span className="icon is-medium">
                <i className="fa-lg far fa-compass"></i>
              </span>
            </div>
            <div className="navbar-item">
              <span className="icon is-medium">
                <i className="fa-lg far fa-heart"></i>
              </span>
            </div>
            <div className="navbar-item">
              <span className="icon is-medium">
                <i className="fa-lg far fa-user"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const TopNavigationBar = () => {
  return renderDesktop()
}

export default TopNavigationBar
