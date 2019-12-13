import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Home } from '../home'
import { styled } from '@emotion/styled'

const Container = styled('header')`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`

const TopNavbar = () => (
  <Container>
    <Link to='/'>Home</Link>
    <Link to='/another'>Another Link</Link>
  </Container>
)

export default TopNavbar
