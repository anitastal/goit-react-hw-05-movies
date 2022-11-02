import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchApi } from 'helpers/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

export const Movies = () => {
  const [movie, setMovie] = useState(null);
  // const [query, setQuery] = useState(null);
  const [params, setParams] = useSearchParams();
  let query = params.get('query') || '';
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await searchApi({ query });
      setMovie(data.results);
    };
    getData();
  }, [query]);

  const getFormData = data => {
    setParams({ query: data });
  };

  const getFilmOnClick = e => {
    e.preventDefault();
    setMovie(e.target.id);
  };

  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id} onClick={getFilmOnClick}>
              <Link
                to={`${item.id}`}
                state={{ from: location }}
                id={item.id}
                className={css.movieLink}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
