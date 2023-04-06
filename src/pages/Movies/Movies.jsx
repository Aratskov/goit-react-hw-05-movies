import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../components/Service/ServiceApi';
import MarkupMovies from 'components/Markup/Markup';
import { Gallery } from 'components/Cast/Cast.styled';

const Moves = () => {
  const [storage, setStorage] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const filterPage = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!filterPage) {
      setStorage([]);
      return;
    }
    getSearchMovies(filterPage)
      .then(data => setStorage(data.results))
      .catch(error => console.log(error.message));
  }, [filterPage]);

  const handlerSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.movies;

    setSearchParams(value.trim() !== '' ? { query: value } : {});
  };

  return (
    <main>
      <form onSubmit={handlerSubmit} style={{ display: 'flex', gap: 15 }}>
        <input type="text" name="movies" defaultValue={filterPage} style={{width: "250px"}} />
        <button type="submit">Go</button>
      </form>
      <Gallery>
        {storage &&
          storage.map(movie => <MarkupMovies movies={movie} key={movie.id} />)}
      </Gallery>
    </main>
  );
};

export default Moves;
