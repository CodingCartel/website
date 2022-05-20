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
      {isOpen && <div className={styles.navigationMenu}>je suis la div</div>}
    </div>
  )
}

export default HamburgerMenu
