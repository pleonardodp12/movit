import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pleonardodp12.png" alt="Leonardo Dias"/>
      <div>
        <strong>Leonardo Dias</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}