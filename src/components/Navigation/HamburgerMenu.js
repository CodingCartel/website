import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

import styles from './HamburgerMenu.module.scss'
/* 
? Check Clip pass pour le menu rond
*/
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const navMenu = useRef()
  const closeAnimation = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsOpen(!isOpen)
      }
    })
    t1.to(navMenu.current, { opacity: 0, duration: 1 })
    gsap.to(`.${styles.hamburgerIcon2}`, { opacity: 1 })
  }
  const openAnimation = () => {
    gsap.to(navMenu.current, { opacity: 1, duration: 1 })
    gsap.to(`.${styles.hamburgerIcon2}`, { opacity: 1 })
    gsap.to(`.${styles.hamburgerIcon1}`, { rotation: -45, top: 10, left: 8 })
    gsap.to(`.${styles.hamburgerIcon3}`, { rotation: 45, top: -10, left: 8 })
  }
  useEffect(() => {
    if (isClicked) {
      openAnimation()
    }
  })

  const HandleClick = () => {
    setIsClicked(!isClicked)
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
        <div className={styles.navigationMenu} ref={navMenu}>
          <a href="#accueil">&lt;accueil&gt;</a> <br />
          <a href="#projets">&lt;projets&gt;</a> <br />
          <a href="#contact">&lt;contact&gt;</a> <br />
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
