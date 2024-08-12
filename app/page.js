'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useThemeContext } from '@/context/theme';

// Components
import Img from '@/components/img';
import Nav from '@/components/nav';

export default function Home() {
  const { searchResult } = useThemeContext();
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    axios
      .get('/api/popular')
      .then((response) => {
        setNowPlaying(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <Nav />

      {searchResult.length > 0 ? (
        <div>
          {searchResult.map((movie, i) => (
            <div className={styles.movie} key={i}>
              <h2>{movie.title}</h2>
              <div className={styles.movie_poster}>
                {movie.poster_path ? (
                  <Img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}`}
                  />
                ) : (
                  <span>Image Not Available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.now_playing_container}>
          <h2>Now Playing</h2>
          <br />
          <div className={styles.now_playing}>
            {nowPlaying.map((movie, i) => (
              <div className={styles.movie} key={i}>
                <div className={styles.movie_poster}>
                  {movie.poster_path ? (
                    <Img
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}`}
                    />
                  ) : (
                    <span>Image Not Available</span>
                  )}
                </div>
                <h4>{movie.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
