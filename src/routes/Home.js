import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Home() {
    const [loading, setLoading] = useState(true); 
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };  
    useEffect(() => {
      getMovies();
    }, []);
  
    return  (
      <div className={styles.container}> 
        {loading ? (
            <Loading />
        ) : (
          <div className={styles.movies}>
            <Header />
            <div className={styles.movie__box}>
              {movies.map((movie) =>
                <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
}
export default Home;