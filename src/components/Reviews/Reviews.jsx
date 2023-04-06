import { useParams } from "react-router-dom";
import { getMovieReviers } from "../Service/ServiceApi";
import { useEffect, useState } from "react";
import Text from "./Text";

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getMovieReviers(Number(moviesId))
      .then(setReviews)
      .catch((error) => console.log(error.message));
  }, []);

  if (!reviews) return;

  const { results } = reviews;

  return (
    <ul>
      {results.length > 0 ? (
        results.map(({ content, id, author }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <Text content={content} />
          </li>
        ))
      ) : (
        <li>We don't have any reviews for this movie. </li>
      )}
    </ul>
  );
};

export default Reviews;
