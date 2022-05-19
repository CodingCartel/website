import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.navigationButton}>
      <button
        className={styles.buttonHamburgerHidden}
        type="button"
        onClick={HandleClick}
      >
        <div className={styles.hamburgerIcon} />
      </button>
      {isOpen && <div className={styles.navigation}>je suis la div</div>}
    </div>
  )
}

export default HamburgerMenu
