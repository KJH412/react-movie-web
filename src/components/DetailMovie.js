import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, titleLong, coverImg, rating, runtime, summary, genres, year, bgImg, url }) {
    return (
        <div id={id} className={styles.det__movie__wrap}>      
            <div className={styles.det__movie__box}>
                <div className={styles.det__info}>
                    <div className={styles.det__cover__img}>
                        <img src={coverImg} alt={title} />
                    </div>
                    <div className={styles.det__text__wrap}>
                        <h2>{titleLong}</h2>
                        <ul className={styles.det__info__small}>
                            <li>⭐{rating}</li>
                            <li>{runtime}min</li>
                        </ul>                       
                      
                        <ul className={styles.movie__genres}>
                            {genres && genres.map((g) =>
                            <li key={g}>{g}</li>
                            )}
                        </ul>
                        <p className={styles.det__summary}>{summary}</p>
                        <div className={styles.det__btn__wrap}>
                            <button><Link to={`/react-movie-web`}>뒤로</Link></button>
                            <button><Link to={`${url}`}>더보기</Link></button>
                        </div>
                    </div>
                </div>                
            </div>
            <div className={styles.det__bg}>
                <img src={bgImg} />
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    titleLong: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    bgImg: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default Movie;