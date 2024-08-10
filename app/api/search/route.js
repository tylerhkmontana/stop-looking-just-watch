export async function GET(request) {
  const bearer =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzFiZTM4NTdiNTViNDgzOTU4YTYzMTUwNDVmNWJhMyIsIm5iZiI6MTcyMzIyNjAzMS44Mzk3MjcsInN1YiI6IjYwMjBkYWMwNTRhMDk4MDAzZjNkZTc0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LeqNBjybg7xLqauVsp6wqGfWT-drUkOTAFoH6WaPHjs';
  const title = request.nextUrl.searchParams.get('title');
  const url = 'https://api.themoviedb.org/3/search/movie?query=';
  const res = await fetch(url + title, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearer}`,
    },
  });

  const data = await res.json();

  return Response.json({ movies: data.results });
}
