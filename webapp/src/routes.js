import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import { Home } from './home'
// import TopNavbar from './components/TopNavbar'

function AppRouter() {
  return (
    <>
      <Router>
        <div css={layoutStyle}>
          <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to={'/'}>Divvy Homework App</Link>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <div css={navStyle}>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      exact
                      to={'/'}>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to={'/another'}>
                      Another route
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to={'/create'}>
                      Create
                      </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      className='nav-link'
                      to={'/index-list'}>
                      Index
                      </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={() => <div className='some-class'>Content for /another route</div>} exact path='/another' />
        </div>
      </Router>
      <Global
        styles={css`
            .some-class {
              color: hotpink !important;
            }
          `}
      />
      <Global
        styles={{
          '.some-class': {
            fontSize: 50,
            textAlign: 'center'
          }
        }}
      />
    </>
  )
}

export default AppRouter

const contentStyle = css`
  grid-row: 2
`
const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
  padding: 8px;
`
const navStyle = css`
  grid-row: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    font-size: 44px;
  }

  & > ul > li:not(:first-child) {
    margin-left: 16px;
  }

  & > ul > li {
    padding: 32px;
    background-color: yellow;
    font-size: 24px;
    border-radius: 4px;
  }

  & > ul > li > a { 
    color: green;
    text-decoration: none;
    
    &:hover {
      color: white;
    }
  }
`
