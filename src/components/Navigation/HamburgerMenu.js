import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.navigationContainer}>
      <button
        className={styles.navigationButton}
        type="button"
        onClick={HandleClick}
      >
        <div className={styles.hamburgerIcon1} />
        <div className={styles.hamburgerIcon2} />
        <div className={styles.hamburgerIcon3} />
      </button>

      {isOpen && (
        <div className={styles.navigationMenu}>
          <a href="#accueil">&lt;accueil&gt;</a> <br />
          <a href="#projets">&lt;projets&gt;</a> <br />
          <a href="#contact">&lt;contact&gt;</a> <br />
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
