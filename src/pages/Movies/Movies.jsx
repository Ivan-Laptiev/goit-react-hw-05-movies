import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../../servises/API';
import MoviesList from '../../components/MoviesList/MovieList';

export default function Movies() {
  const [value, setValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    (() => {
      query &&
        getSearchMovie(query).then(data => {
          setFilms(data.results);
        });
    })();
  }, [query]);

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value });
    setValue('');
  };

  return (
    <div>
      <main >
        <div >
          <form onSubmit={onHandleSubmit} >
            <input
              type="text"
              
              placeholder="Search"
              value={value}
              onChange={onHandleChange}
            />

            <button type="submit" >
                Search              
            </button>
          </form>
        </div>
        {films && <MoviesList films={films} />}
      </main>
    </div>
  );
}