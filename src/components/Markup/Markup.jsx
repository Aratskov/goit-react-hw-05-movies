import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const MarkupMovies = ({ movies }) => {
    const location = useLocation();
  const { id, poster_path, title } = movies;

  return (
    <li>
      <Link to={`/movies/${id}`} 
      style={{textDecoration:"none",color:"black"}}
      state={{ page: location }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          lazy="loading"
        />
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MarkupMovies;