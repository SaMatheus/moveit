// STYLES
import styles from '../styles/components/NavBar.module.css';

// ROUTER
import Link from 'next/link';

// ICONS
import { FiLogOut, FiHome, FiAward } from 'react-icons/fi';

// HOOKS
import { useContext } from 'react'

// CONTEXT
import { PathContext } from '../contexts/PathContext'


export function NavBar() {
  const { url } = useContext(PathContext)
  return (
    <div className={styles.container}>
      <img src='/icons/logo.svg' alt='logomarca' />

      <ul className={styles.nav}>
        <li className={url === '/home' ? `` : ``}>
          <Link href='/home'>
            <a href='/home'>
              <FiHome />
            </a>
          </Link>
        </li>
        <li className={url === '/ranking' ? `` : ``}>
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
