import React from 'react'
import styles from './HeroBlock.module.scss'
import Header from '../Navigation/Header'

const HeroBlock = () => {
  return (
    <section className={styles.heroBlock}>
      <h1 className={styles.heading}>Bienvenue sur le coding carte </h1>
      <Header />
    </section>
  )
}

export default HeroBlock
