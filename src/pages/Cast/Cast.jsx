import { movieCastsApi } from 'helpers/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await movieCastsApi(movieId);
      setCast(data.cast);
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={css.list}>
          {cast?.map(({ id, profile_path, name }) => (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                }
                alt={name}
                width="60"
              />
              <p className={css.text}>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
