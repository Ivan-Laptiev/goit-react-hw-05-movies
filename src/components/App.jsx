import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>      
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />          
          <Route path="movies" element={<Movies />} />          
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>          
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>  
      
    </div>
  );
};