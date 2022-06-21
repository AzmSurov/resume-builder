import React from 'react'
import styles from './Header.module.css';
import resumeSvg from '../../assets/resume.svg'
function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>

        
        <p className={styles.heading}>
            Build your <span>Resume</span> that stands out.
        </p>
        </div>
        <div className={styles.right}>
            <img src={resumeSvg} alt="resume"/>
        </div>
    </div>
  )
}

export default Header