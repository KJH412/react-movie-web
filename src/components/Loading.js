import styles from "../routes/Home.module.css";

function Loading() {
    
   return ( 
        <div className={styles.load}>
            <p className={styles.loader}></p>
        </div>
    )
}

export default Loading;