import React, { Component } from 'react'

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = { profile: {} }
  }

  render () {
    return (
      <React.Fragment>
        <div className='dynamic-content'>
          <h2 className='colorlib-heading'>
            {this.state.profile.first_name}{' '}
            {this.state.profile.last_name}
          </h2>
          <div className='colorlib-sub-heading'>
            {this.state.profile.email}
          </div>
          <p>{this.state.profile.about}</p>
        </div>
        {/* <ProfileTable></ProfileTable> */}
      </React.Fragment>
    )
  }
}

export default UserList
