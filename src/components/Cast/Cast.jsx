import { useParams } from "react-router-dom";
import { getMovieCast } from "../Service/ServiceApi";
import { useEffect, useState } from "react";
import { Gallery } from "./Cast.styled";

const Cast = () => {
  const { moviesId } = useParams();
  const [casts, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(moviesId)
      .then(setCast)
      .catch((error) => console.log(error.message));
  }, [moviesId]);

  if (!casts) return;
  const { cast } = casts;

  return (
    <Gallery>
      {cast.map(({ id, profile_path, name }) => {
        if (!profile_path) return;
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              lazy="loading"
            />
            <p>{name}</p>
          </li>
        );
      })}
    </Gallery>
  );
};

export default Cast;
