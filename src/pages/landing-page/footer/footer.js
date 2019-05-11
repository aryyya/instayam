import React from 'react'
import './footer.scss'

import { NavLink } from 'react-router-dom'

const links = [
  { name: 'About Us',  path: '/disclaimer/about-us'  },
  { name: 'Support',   path: '/disclaimer/support'   },
  { name: 'Press',     path: '/disclaimer/press'     },
  { name: 'API',       path: '/disclaimer/api'       },
  { name: 'Jobs',      path: '/disclaimer/jobs'      },
  { name: 'Privacy',   path: '/disclaimer/privacy'   },
  { name: 'Terms',     path: '/disclaimer/terms'     },
  { name: 'Directory', path: '/disclaimer/directory' },
  { name: 'Profiles',  path: '/disclaimer/profiles'  },
  { name: 'Hashtags',  path: '/disclaimer/hashtags'  },
  { name: 'Language',  path: '/disclaimer/languages' }
]

const Footer = () => {
  return (
    <footer className="footer is-size-7 has-text-weight-semibold  has-background-white-bis has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column has-text-info">
            <div className="columns is-multiline is-mobile is-centered">
              {links.map(link => (
                <NavLink
                  className="column is-narrow"
                  key={link.name}
                  to={link.path}
                  activeClassName="is-underlined"
                >
                  <span className="is-size-7">{link.name}</span>
                </NavLink>
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
