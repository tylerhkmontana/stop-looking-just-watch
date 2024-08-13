export async function GET(request) {
  const title = request.nextUrl.searchParams.get('title');
  const url = 'https://api.themoviedb.org/3/search/movie?query=';
  const res = await fetch(url + title, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER}`,
    },
  });

  const data = await res.json();

  return Response.json({ movies: data.results });
}
