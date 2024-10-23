import styles from "./catVid.module.css"

export default function CatVid({disc, clip}) {
return(
<div className={styles.block}>
    <div className={styles.piece}>
    <iframe className={styles.vidBlock} 
        max-width="600px" 
        src={`https://www.youtube.com/embed/${clip}`} 
        allow="accelerometer; autoplay;"
        allowFullScreen
    ></iframe>
        <p>{disc}</p>
    </div>
</div>
)
}