import React from 'react'
import '../styles/core/globals.scss'
import '../styles/core/normalize.scss'
import HamburgerMenu from '../components/Navigation/HamburgerMenu'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <HamburgerMenu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
