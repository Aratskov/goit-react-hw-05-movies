import { getMoviesSearch } from "../../components/Service/ServiceApi";
import { useEffect, useState } from "react";
import MarkupMovies from "components/Markup/Markup";
import { Gallery } from "components/Cast/Cast.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesSearch()
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <main>
      <h1 style={{textAlign:"center",fontSize:"40px"}}>Trending today</h1>
      <Gallery>
        {movies.map(movie => (
        < MarkupMovies movies={movie} key={movie.id}/>
        ))}
      </Gallery>
    </main>
  );
};

export default Home;
