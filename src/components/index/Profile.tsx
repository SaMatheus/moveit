import styles from '../../styles/components/index/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { LoginContext } from '../../contexts/LoginContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { fetchData } = useContext(LoginContext);

  console.log(fetchData);

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
