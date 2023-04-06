import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesId } from "../../components/Service/ServiceApi";
import { useEffect, useState } from "react";
import { Wrap, WrapBtn, StyleLink, StyleLinkBack } from "./MoviesDetail.styled";
import { BsFillCaretLeftFill } from "react-icons/bs";

const MoviesDetail = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
console.log(movie)
  useEffect(() => {
    getMoviesId(Number(moviesId))
      .then(setMovie)
      .catch((error) => console.log(error.message));
  }, [moviesId]);

  if (!movie) return;

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  const rating = Math.round(vote_average * 10);
  const backLink = location.state?.page ?? "/";
  

  return (
    <main>
      <StyleLinkBack to={backLink}>
        <BsFillCaretLeftFill style={{}} />
        Back
      </StyleLinkBack>
      <Wrap>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
        </div>
        <div>
          <h2>{original_title}</h2>
          <p>User Score: {rating}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres.map(({ id, name }) => (
            <span key={id}>{name} </span>
          ))}
        </div>
      </Wrap>
      <WrapBtn>
        <li>
          <StyleLink to="cast" state={{ page: location.state?.page }}>
            Cast
          </StyleLink>
        </li>
        <li>
          <StyleLink to="reviews" state={{ page: location.state?.page }}>
            Reviews{" "}
          </StyleLink>
        </li>
      </WrapBtn>
      <Outlet />
    </main>
  );
};

export default MoviesDetail;
