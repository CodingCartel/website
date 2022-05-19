import React from 'react'
import Link from 'next/link'
import styles from './HeroBlock.module.scss'

const HeroBlock = () => {
  return (
    <section className={styles.heroBlock}>
      <h1 className={styles.heading}>
        <span className={styles.headingTop}>&lt;coding&gt;</span>
        <span className={styles.headingBottom}>cartel</span>
      </h1>
      <p className={styles.paragraph}>
        <span>Tu kiffes l’informatique ?</span>
        <span>Tu veux faire partie d’une équipe étudiante ?</span>
        <span>
          Rejoins-nous et développe tes propres projets ou ceux des autres !
        </span>
        <Link href="/project">
          <a href="/#" className={styles.projectLink}>
            projets
          </a>
        </Link>
      </p>
    </section>
  )
}

export default HeroBlock
