export async function GET(request) {
  const url =
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  const res = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER}`,
    },
  });

  const data = await res.json();

  return Response.json({ movies: data.results });
}
