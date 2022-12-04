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
  const animationSpeed = 0.5
  const closeAnimation = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsOpen(!isOpen)
      }
    })
    t1.to(navMenu.current, { opacity: 0, duration: 0.5 })
    gsap.to(`.${styles.hamburgerIcon1}`, {
      keyframes: [
        {
          rotate: 0
        },
        {
          top: 0,
          delay: animationSpeed
        }
      ],
      duration: animationSpeed
    })
    gsap.to(`.${styles.hamburgerIcon2}`, {
      x: 0,
      opacity: 1,
      delay: animationSpeed,
      ease: 'back.out(3)'
    })
    gsap.to(`.${styles.hamburgerIcon3}`, {
      keyframes: [
        {
          rotate: 0
        },
        {
          top: 26,
          delay: animationSpeed
        }
      ],
      duration: animationSpeed
    })
  }
  const openAnimation = () => {
    gsap.to(navMenu.current, { opacity: 1, duration: 0.5 })
    gsap.to(`.${styles.hamburgerIcon1}`, {
      keyframes: [
        {
          top: 13
        },
        {
          rotation: -45,
          delay: animationSpeed
        }
      ],
      duration: animationSpeed,
      delay: animationSpeed
    })
    gsap.to(`.${styles.hamburgerIcon2}`, {
      x: -50,
      opacity: 0,
      ease: 'back.in(3)',
      duration: animationSpeed
    })
    gsap.to(`.${styles.hamburgerIcon3}`, {
      keyframes: [
        {
          top: 13
        },
        {
          rotation: 45,
          delay: animationSpeed
        }
      ],
      duration: animationSpeed,
      delay: animationSpeed
    })
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
        open={isOpen}
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
