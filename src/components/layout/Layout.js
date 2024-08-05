import React from 'react'
import NavBar from '../nav_bar_component/Nav_bar'
import Footer from '../footer/footer'

const Layout = (props) => {
  return (
  <>
    <NavBar/>
    {props.children}
    <Footer/>
  </>

  )
}

export default Layout
