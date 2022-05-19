import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button type="button" onClick={HandleClick}>
        button
      </button>
      {isOpen && <div className={styles.navigation}>je suis la div</div>}
    </div>
  )
}

export default HamburgerMenu
