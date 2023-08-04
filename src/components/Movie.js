import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, year, rating}) {
    return (
    <div className={styles.movie}>
      <div className={styles.movie__img__wrap}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div className={styles.text__hover}>
        <p className={styles.rating}><span className={styles.star}>⭐</span>{rating}/10</p>
        <p className={styles.movie__summary}>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>
        <button className={styles.detail__btn}>
           <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>DETAIL</Link>
        </button>
      </div>
      </div>
      <div className={styles.title__wrap}>
          <h2 className={styles.movie__title}>
            <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title.length > 23 ? `${title.slice(0, 23)}...` : title}</Link>
          </h2>
          <p className={styles.movie__year}>{year}</p>
      </div>      
     
    </div>
  )
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default Movie;
