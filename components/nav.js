'use client';

import styles from './styles/nav.module.scss';
import Link from 'next/link';
import { useThemeContext } from '@/context/theme';

export default function Nav() {
  const { searchHandler } = useThemeContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_and_routes}>
        <Link href={'/'}>
          <h1 className={styles.logo}>ChipsOnCouch</h1>
        </Link>

        <div className={styles.routes}>
          <Link href={'/'}>Home</Link>
          <Link href={'/movies'}>Movies</Link>
          <Link href={'/tvshows'}>TV Shows</Link>
          <Link href={'/genres'}>Browse By Genres</Link>
        </div>
      </div>

      <form className={styles.search_bar} onSubmit={(e) => searchHandler(e)}>
        <input name="searchInput" required />
        <button>
          <img src="/icons/search.svg" alt="search logo" />
        </button>
      </form>
    </nav>
  );
}
