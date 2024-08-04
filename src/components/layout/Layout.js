import React from 'react'
import NavBar from '../nav_bar_component/Nav_bar'

const Layout = (props) => {
  return (
  <>
    <NavBar/>
    {props.children}
  </>

  )
}

export default Layout
