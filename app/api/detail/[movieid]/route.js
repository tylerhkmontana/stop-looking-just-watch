export async function GET(request, { params }) {
  const { movieid } = params;
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.BEARER}`,
  };
  const url1 = `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`;
  const res1 = await fetch(url1, {
    headers,
  });

  const movie = await res1.json();

  const url2 = `https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`;
  const res2 = await fetch(url2, {
    headers,
  });

  const data = await res2.json();
  const casts = await data.cast;

  return Response.json({ movie, casts });
}
