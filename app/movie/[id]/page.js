import Image from 'next/image';
import styles from './page.module.scss';

export default async function MovieDetail({ params }) {
  const { id } = params;
  const data = await fetch(`${process.env.BASE_URL}/api/detail/${id}`).then(
    (response) => response.json()
  );
  const movie = data.movie;

  return (
    <div>
      <h1>{movie.title}</h1>
      <div className={styles.poster}>
        <Image
          fill="true"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}`}
        />
      </div>
    </div>
  );
}
