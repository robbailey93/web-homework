import React from 'react'
// import { BrowserRouter as Route } from 'react-router-dom'
// import { css } from '@emotion/core'
import UserList from '../components/UserList'
// import TopNavbar from '../components/TopNavbar'

// query {
//   transactions {
//     id
//     user_id
//     description
//     merchant_id
//     debit
//     credit
//     amount
//   }
// }


export function Home() {
  return (
    <>
      {/* <Link to="/another">Another route</Link> */}
      <div>Ready, steady, go!</div>
      <div>Ready, steady, go 2!</div>
      <div>Ready, steady, go 3!</div>
      <UserList />
      {/* <TopNavbar /> */}
    </>
  )
}
