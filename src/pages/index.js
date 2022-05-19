import React from 'react'
import Head from 'next/head'
import HeroBlock from '../components/blocks/HeroBlock'

const Home = () => {
  return (
    <>
      <Head>
        <title>Coding cartel - home</title>
      </Head>
      <main>
        <HeroBlock />
      </main>
    </>
  )
}

export default Home
