import React from 'react'
import './instayam-title.scss'
import classnames from 'classnames'

const InstayamTitle = ({
  isSmall
}) => {
  return (
    <h1 className={classnames(
      'instayam-title title',
      { 'is-size-3': !isSmall },
      { 'is-size-5':  isSmall }
    )}>
      Instayam
    </h1>
  )
}

export default InstayamTitle
