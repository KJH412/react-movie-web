
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import DetailMovie from "../components/DetailMovie";
import Header from "../components/Header";
import Loading from "../components/Loading";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true); 
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();       
        // setMovies(json.data.movies);
        setMovies(json.data.movie);
        setLoading(false); 
    };    
    useEffect(() => {
        getMovie();      
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.movie__wrap}>       
                    <Header />
                    <DetailMovie 
                    key={movies.id}
                    id={movies.id}
                    coverImg={movies.large_cover_image} 
                    title={movies.title} 
                    titleLong={movies.title_long} 
                    year={movies.year}
                    summary={movies.description_full} 
                    genres={movies.genres}
                    rating={movies.rating}
                    runtime={movies.runtime}
                    bgImg={movies.background_image}
                    url={movies.url}
                    />                    
                </div>
            )}
        </div>
    );
}

export default Detail;