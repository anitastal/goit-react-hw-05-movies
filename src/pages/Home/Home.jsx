import { getTrending } from 'helpers/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <ul className={css.homeList}>
        {movies?.map(({ original_title, id, poster_path }) => (
          <li className={css.list} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              width="200"
            />
            <Link to={`movies/${id}`} className={css.homeLink}>
              <p className={css.text}>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
