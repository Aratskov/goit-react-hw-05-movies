import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../components/Service/ServiceApi";
import { Link } from "react-router-dom";

const Moves = () => {
  const [storage, setStorage] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const filterPage = searchParams.get("query") ?? "";
  const location = useLocation();

  useEffect(() => {
    if (!filterPage) {
      setStorage([]);
      return;
    }
    getSearchMovies(filterPage).then((data) => setStorage(data.results)).catch(error => console.log(error.message));
  }, [filterPage]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { value } = e.currentTarget.movies;

    setSearchParams(value.trim() !== "" ? { query: value } : {});
  };

  return (
    <main>
      <form onSubmit={handlerSubmit} style={{ display: "flex", gap: 15 }}>
        <input type="text" name="movies" defaultValue={filterPage} />
        <button type="submit">Go</button>
      </form>
      <ul>
        {storage &&
          storage.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ page: location }}>
                {original_title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Moves;