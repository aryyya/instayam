import React from 'react'
import './entry-box.scss'

export const EntryBox = ({ children }) => (
  <div className="entry-box has-text-centered">
    {children}
  </div>
)

export const EntryBoxTop = ({ children }) => (
  <div className="entry-box__top card mb-12">
    <div className="card-content">
      {children}
    </div>
  </div>
)

export const EntryBoxBottom = ({ children }) => (
  <div className="entry-box__bottom card">
    <div className="card-content">
      {children}
    </div>
  </div>
)
