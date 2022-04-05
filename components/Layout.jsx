import React from 'react'
import { Header } from './'

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
