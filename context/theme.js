'use client';

import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const Context = createContext();

export function ThemeProvider({ children }) {
  const [searchResult, setSearchResult] = useState([]);

  function searchHandler(e) {
    e.preventDefault();
    const title = e.target.searchInput.value;
    axios
      .get(`/api/search?title=${title}`)
      .then((response) => {
        const movies = response.data.movies;
        setSearchResult(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Context.Provider value={{ searchResult, searchHandler }}>
      {children}
    </Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}
