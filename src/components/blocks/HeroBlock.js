import React from 'react'
import styles from './HeroBlock.module.scss'
import HamburgerMenu from '../Navigation/HamburgerMenu'

const HeroBlock = () => {
  return (
    <section className={styles.heroBlock}>
      <HamburgerMenu />

      <h1 className={styles.heading}>Bienvenue sur le coding cartel </h1>
    </section>
  )
}

export default HeroBlock
