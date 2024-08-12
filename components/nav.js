'use client';

import styles from './styles/nav.module.scss';
import Link from 'next/link';
import { useThemeContext } from '@/context/theme';

export default function Nav() {
  const { searchHandler } = useThemeContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href={'/'}>ChipsOnCouch</Link>
      </div>

      <div className={styles.routes}>
        <Link href={'/'}>Home</Link>
        <Link href={'/movies'}>Movies</Link>
        <Link href={'/tvshows'}>TV Shows</Link>
        <Link href={'/genres'}>Browse By Genres</Link>
      </div>

      <form className={styles.search_bar} onSubmit={(e) => searchHandler(e)}>
        <input name="searchInput" />
        <button>search</button>
      </form>
    </nav>
  );
}
