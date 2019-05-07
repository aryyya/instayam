import React from 'react'
import { connect } from 'react-redux'
import { setUserName } from '../../store/creators/user'

const LandingPage = ({
  user,
  setUserName
}) => {
  const modifyUserName = () => {
    setUserName('Cosmo Kramer')
  }

  return (
    <div>
      Hello, {user.name}! <button onClick={modifyUserName}>Change Name</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserName: name => dispatch(setUserName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
