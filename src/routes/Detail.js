import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const activeStyle = {
    color: "skyblue",
  };
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h3>
        <NavLink activeStyle={activeStyle} exact className="link" to="/">
          Back..
        </NavLink>
      </h3>
      <h1>Detail</h1>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            summary={movie.summary}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
