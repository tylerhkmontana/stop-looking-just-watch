export async function GET(request, { params }) {
  const { movieid } = params;
  const url = `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`;
  const res = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER}`,
    },
  });

  const data = await res.json();
  console.log(data);

  return Response.json({ movie: data });
}
