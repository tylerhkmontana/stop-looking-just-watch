import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { id } = params;
  const data = await fetch(`${process.env.BASE_URL}/api/detail/${id}`, {
    cache: "no-store",
  }).then((response) => response.json());
  const { movie, credits } = data;

  return (
    <main className={styles.main}>
      <div className={styles.backdrop}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${movie.backdrop_path}/`}
          fill
          alt={`Backdrop Image: ${movie.title}`}
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
                  {/* Direcotr or Writer */}
          <div className={styles.casts}>
            {credits.crew.map(
              (person, i) =>
                (person.job === "Writer" || person.job === "Screenplay" || person.job === "Director") && (
                  <Link href={`/person/${person.id}`}><div className={styles.profile} key={i}>
                    <div className={styles.profile_pic}>
                      <Image
                        src={
                          person.profile_path
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${person.profile_path}`
                            : "/icons/anonymous.png"
                        }
                        fill
                        alt={`Writer: ${person.name}`}
                      />
                    </div>
                    <p>{person.name}</p>
                    <p>{person.job}</p>
                  </div></Link>
                )
            )}
          </div>
          <br/>
          {/* Actors */}
          <div className={styles.casts}>
            {credits.cast.map(
              (person, i) =>
                person.known_for_department === "Acting" && (
                  <Link href={`/person/${person.id}`}><div className={styles.profile} key={i}>
                    <div className={styles.profile_pic}>
                      <Image
                        src={
                          person.profile_path
                            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${person.profile_path}`
                            : "/icons/anonymous.png"
                        }
                        fill
                        alt={`Actor: ${person.name}`}
                      />
                    </div>
                    <p>{person.name}</p>
                    <p>{person.character}</p>
                  </div></Link>
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
