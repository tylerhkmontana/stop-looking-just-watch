'use client';

import styles from './page.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { useThemeContext } from '@/context/theme';

// Components
import Img from '@/components/img';
import Nav from '@/components/nav';

export default function Home() {
  const { searchResult } = useThemeContext();

  const imageUrlPath = 'https://image.tmdb.org/t/p/original';

  return (
    <main className={styles.main}>
      <Nav />

      <div>
        {searchResult.map((movie, i) => (
          <div className={styles.movie} key={i}>
            <h2>{movie.title}</h2>
            <div className={styles.movie_poster}>
              {movie.poster_path ? (
                <Img src={`${imageUrlPath}${movie.poster_path}`} />
              ) : (
                <span>Image Not Available</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
