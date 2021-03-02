import styles from '../styles/components/NavBar.module.css';

import Link from 'next/link';

import { FiLogOut, FiHome, FiAward } from 'react-icons/fi';

export function NavBar() {
  return (
    <div className={styles.container}>
      <img src='/icons/logo.svg' alt='logomarca' />

      <ul className={styles.nav}>
        <li>
          <Link href='/home'>
            <a href='/home'>
              <FiHome />
            </a>
          </Link>
        </li>
        <li>
          <Link href='/ranking'>
            <a href='/ranking'>
              <FiAward />
            </a>
          </Link>
        </li>
      </ul>

      <Link href='/'>
        <a href='/'>
          <FiLogOut />
        </a>
      </Link>
    </div>
  );
}
