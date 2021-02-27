import styles from '../../styles/components/index/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/SaMatheus.png' alt='Matheus Sá' />
      <div>
        <strong>Matheus Sá</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
