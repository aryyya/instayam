import React from 'react'

import { EntryBox, EntryBoxTop } from '../entry-box/entry-box'

const DisclaimerModal = ({ history }) => {
  return (
    <EntryBox>
      <EntryBoxTop>
        <div className="mb-20">
          <p>
            Instayam is a clone of Instagram.
          </p>
        </div>
        <button
          onClick={() => history.push('/')}
          className="button is-fullwidth"
        >
          Go back
        </button>
      </EntryBoxTop>
    </EntryBox>
  )
}

export default DisclaimerModal
