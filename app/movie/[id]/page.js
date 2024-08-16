import Image from 'next/image';
import styles from './page.module.scss';

export default async function MovieDetail({ params }) {
  const { id } = params;
  const data = await fetch(`${process.env.BASE_URL}/api/detail/${id}`).then(
    (response) => response.json()
  );
  const { movie, casts } = data;

  return (
    <main className={styles.main}>
      <div className={styles.backdrop}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.backdrop_path}/`}
          fill
        />
        <div className={styles.blur}></div>
        <div className={styles.fade_out}></div>
      </div>

      <div className={styles.movie_info}>
        <div className={styles.title_and_casts}>
          <h1 className={styles.movie_title}>{movie.title}</h1>
          <br />
          <br />
          <br />
          <br />
          <p className={styles.synopsis}>{movie.overview}</p>
          <br />
          <br />
          <div className={styles.casts}>
            {casts.map(
              (cast, i) =>
                cast.known_for_department === 'Acting' && (
                  <div className={styles.profile} key={i}>
                    <div className={styles.profile_pic}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${cast.profile_path}`}
                        fill
                      />
                    </div>
                    <p>{cast.name}</p>
                  </div>
                )
            )}
          </div>
        </div>

        <div className={styles.details}>
          <div>
            {movie.spoken_languages.map((language, i) => (
              <p key={i}>{language.name}</p>
            ))}
          </div>
          <p>{movie.release_date}</p>
          <p>{movie.runtime} min</p>
          <p>{movie.vote_average}</p>
          <p>${movie.revenue - movie.budget}</p>
          <div className={styles.genres}>
            {movie.genres.map((genre, i) => (
              <span key={i}>{genre.name}</span>
            ))}
          </div>
          <div className={styles.productions}>
            {movie.production_companies.map((company, i) => (
              <p key={i}>{company.name}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
