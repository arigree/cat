"use client";

import { useState } from 'react';
import styles from './vets.module.css';

const Vets = () => {
    const [showDetails, setShowDetails] = useState(false);
    const vets = [
        {name: "Paws Clinic", location: "Downtown", details:"24/7 Care"},
        {name:"Whiskers Vet", location:"East Side", details:"Affordable general checkups",}
    ];
    return(
        <div className={styles.vetsContainer}>
            <h1>Cat Vets💉</h1>
            <ul>
                {vets.map((vet, index) =>
                <li key={index}>
                    <h2>{vet.name}</h2>
                    <p>Location: {vet.location}</p>
                    <button onClick={() => setShowDetails}>
                        {showDetails ? "Hide Info" : "Show More Info"}
                    </button>
                    {showDetails && <p>{vet.details}</p>}
                </li>
                )}
            </ul>
        </div>
    )
};

export default Vets;
