import {Link} from "react-router-dom";
import styles from "../routes/Home.module.css";
import logo from "../img/movie_logo.png";

function Header(){
    return (
        <div className={styles.header}>
             <Link to={`/react-movie-web`}>
                <h1 className={styles.logo}>
                    <img src={logo} alt="logo" />
                </h1>
             </Link>
        </div>
    );
}


export default Header;