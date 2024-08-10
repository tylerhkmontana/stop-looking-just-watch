'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import Img from '@/components/img';
import axios from 'axios';

export default function Home() {
  const [searchList, setSearchList] = useState([]);
  const imageUrlPath = 'https://image.tmdb.org/t/p/original';
  function search_handler(e) {
    e.preventDefault();
    const title = e.target.searchInput.value;
    axios
      .get(`/api/search?title=${title}`)
      .then((response) => {
        const movies = response.data.movies;
        console.log(movies);
        setSearchList(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main className={styles.main}>
      <h1>Stop Looking, Just Watch</h1>
      <br />
      <br />
      <br />
      <form className={styles.search_bar} onSubmit={(e) => search_handler(e)}>
        <input name="searchInput" />
        <button>search</button>
      </form>

      <div>
        {searchList.map((movie, i) => (
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
