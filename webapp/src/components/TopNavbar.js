import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'

class TopNavbar extends Component {
  render () {
    return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to={'/'}>
          Divvy Homework App
        </Link>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink
                activeStyle={{ color: 'red' }}
                className='nav-link'
                exact
                to={'/'}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeStyle={{ color: 'red' }}
                className='nav-link'
                to={'/create'}>
                Create
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeStyle={{ color: 'red' }}
                className='nav-link'
                to={'/index-list'}>
                Index
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeStyle={{ color: 'red' }}
                className='nav-link'
                to={'/profiles'}>
                Profiles
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeStyle={{ color: 'red' }}
                className='nav-link'
                to={'/skills'}>
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default TopNavbar
