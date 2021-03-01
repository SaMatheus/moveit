import styles from '../styles/components/NavBar.module.css';

import Link from 'next/link';

export function NavBar() {
  return (
    <div className={styles.container}>
      <img src='' alt='logomarca' />
      <ul>
        <li>
          <Link href='/home'>
            <a>
              <img src='/icons/home.svg' alt='home' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/ranking'>
            <a>
              <img src='/icons/award.svg' alt='awards' />
            </a>
          </Link>
        </li>
      </ul>

      <Link href='/'>
        <a>
          <img src='/icons/logout.svg' alt='logout' />
        </a>
      </Link>
    </div>
  );
}
