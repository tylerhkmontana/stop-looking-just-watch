import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

export default async function MovieDetail({ params }) {
  const { id } = params;
  const data = await fetch(`${process.env.BASE_URL}/api/detail/${id}`, {
    cache: 'no-store',
  }).then((response) => response.json());
  const { movie, credits } = data;
  const ratingWidth = 200;

  return (
    <main className={styles.main}>
      <div className={styles.movie_card}>
        <div className={styles.poster_and_genres}>
          <div className={styles.movie_poster}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.poster_path}/`}
              width={200}
              height={300}
              alt={`Poster Image: ${movie.title}`}
            />
          </div>
          <div className={styles.genres}>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.details}>
            <h1 className={styles.title}>
              {movie.title}({movie.release_date.split('-')[0]})
            </h1>
            <h3>{movie.runtime} min</h3>
            <div className={styles.rating}>
              <div
                className={styles.score}
                style={{
                  width: `${(ratingWidth / 10) * movie.vote_average}px`,
                }}
              ></div>
              <p>{movie.vote_average.toPrecision(2)}</p>
            </div>
          </div>
          <div className={styles.backdrop}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.backdrop_path}/`}
              fill
              alt={`Backdrop Image: ${movie.title}`}
            />
            <div className={styles.blur}></div>
          </div>
        </div>

        <p className={styles.overview}>{movie.overview}</p>

        <div className={styles.credits}>
          <h5>Production</h5>
          <div className={styles.crews}>
            {credits.crew.map(
              (person) =>
                (person.job === 'Director' ||
                  person.job === 'Screenplay' ||
                  person.job === 'Writer') && (
                  <Link href={`/person/${person.id}`} key={person.id}>
                    <div className={styles.person}>
                      <img
                        className={styles.profile_pic}
                        key={person.id}
                        src={
                          person.profile_path
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${person.profile_path}`
                            : '/icons/anonymous.png'
                        }
                      />
                      <div className={styles.person_info}>
                        <p>
                          <strong>{person.name}</strong>
                        </p>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
          <br />
          <h5>Cast</h5>
          <div className={styles.casts}>
            {credits.cast.map(
              (person) =>
                person.known_for_department === 'Acting' && (
                  <Link href={`/person/${person.id}`} key={person.id}>
                    <div className={styles.person}>
                      <img
                        className={styles.profile_pic}
                        src={
                          person.profile_path
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${person.profile_path}`
                            : '/icons/anonymous.png'
                        }
                      />
                      <div className={styles.person_info}>
                        <p>
                          <strong>{person.name}</strong>
                        </p>
                        <p>{person.character}</p>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
