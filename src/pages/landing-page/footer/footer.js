import React from 'react'
import './footer.scss'

import { Link } from 'react-router-dom'

const links = [
  'About Us',
  'Support',
  'Press',
  'API',
  'Jobs',
  'Privacy',
  'Terms',
  'Directory',
  'Profiles',
  'Hashtags',
  'Language'
]

const Footer = () => {
  return (
    <footer className="footer is-size-7 has-text-weight-semibold has-background-light has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column has-text-info">
            <div className="columns is-multiline is-mobile is-centered">
              {links.map(link => (
                <Link
                  className="column is-narrow"
                  key={link}
                  to="/disclaimer"
                >
                  <span className="is-size-7">{link}</span>
                </Link>
              ))}
            </div> {/* columns */}
          </div> {/* column */}
          <div className="column is-narrow has-text-grey">Instayam 2019</div>
        </div> {/* columns */}
      </div> {/* container */}
    </footer>
  )
}

export default Footer
