import { getMoviesSearch } from "../../components/Service/ServiceApi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesSearch()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ page: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
