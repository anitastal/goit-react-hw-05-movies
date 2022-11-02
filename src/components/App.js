import { Cast } from 'pages/Cast/Cast';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Reviews } from 'pages/Reviews/Reviews';

import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
