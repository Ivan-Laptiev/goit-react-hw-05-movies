import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

//const Loader = lazy(() => import('../Loader/Loader'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>     
    </div>
  );
};