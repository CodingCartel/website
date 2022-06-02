import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

import styles from './HamburgerMenu.module.scss'
/* 
? Check Clip pass pour le menu rond
*/
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const background = useRef(null)
  const closeAnimation = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsOpen(!isOpen)
      }
    })
    t1.to(background.current, { opacity: 0, duration: 1 })
  }
  const openAnimation = () => {
    gsap.to(background.current, { opacity: 1, duration: 1 })
  }
  useEffect(() => {
    openAnimation()
  })

  const HandleClick = () => {
    if (isOpen) {
      closeAnimation()
    } else {
      setIsOpen(!isOpen)
    }
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
        <div className={styles.navigationMenu} ref={background}>
          <a href="#accueil">&lt;accueil&gt;</a> <br />
          <a href="#projets">&lt;projets&gt;</a> <br />
          <a href="#contact">&lt;contact&gt;</a> <br />
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
