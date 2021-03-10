import styles from '../../styles/components/index/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import Cookies from 'js-cookie';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  let avatar_url = Cookies.get('avatar_url');
  let name = Cookies.get('name');

  return (
    <div className={styles.profileContainer}>
      <img src={avatar_url} alt={`foto de ${name}`} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src='icons/level.svg' alt='level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
