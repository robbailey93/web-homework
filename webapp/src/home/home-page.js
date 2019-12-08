import React, { Fragment } from 'react'

import TopNavbar from '../components/TopNavbar'
import UserList from '../components/UserList'

export function Home () {
  return (
    <Fragment>
      <TopNavbar />
      {/* <Link to="/another">Another route</Link> */}
      <div>Ready, steady, go!</div>
      <div>Ready, steady, go 2!</div>
      <div>Ready, steady, go 3!</div>

      <UserList />
    </Fragment>
  )
}
