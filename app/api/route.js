export async function GET(request) {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const res = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzFiZTM4NTdiNTViNDgzOTU4YTYzMTUwNDVmNWJhMyIsIm5iZiI6MTcyMzIyNjAzMS44Mzk3MjcsInN1YiI6IjYwMjBkYWMwNTRhMDk4MDAzZjNkZTc0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LeqNBjybg7xLqauVsp6wqGfWT-drUkOTAFoH6WaPHjs',
    },
  });

  const data = await res.json();

  return Response.json({ movies: data.results });
}
