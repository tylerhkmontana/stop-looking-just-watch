import Link from 'next/link';
import styles from './styles/poster.module.scss';
import Img from './img';

export default function Poster({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className={styles.movie}>
        <div className={styles.movie_poster}>
          {movie.poster_path ? (
            <Img
              quality={30}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}`}
            />
          ) : (
            <span>Image Not Available</span>
          )}
          <div className={styles.synopsis}>
            <p>{movie.overview}</p>
            <p className={styles.more}>&gt;&gt;&gt;&gt;</p>
          </div>
        </div>
        <h4>{movie.title}</h4>
      </div>
    </Link>
  );
}
