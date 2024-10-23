import styles from "./catFact.module.css";

export default function CatFact({ breed, shortFact, pic }) {
    return (
        <div className={styles.container}>
            <div className={styles.piece}>
                <img src={pic}></img>
                <h4>{breed}</h4>
                <p>{shortFact}</p>
            </div>
        </div>
    )
}