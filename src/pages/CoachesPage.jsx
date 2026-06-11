import { useEffect, useState } from "react";
import axios from "axios";

import CoachCard from "../components/CoachCard";

function CoachesPage() {
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        axios
            .get("https://iron-mat-academy-server.onrender.com/coaches")
            .then((response) => {
                setCoaches(response.data);
            })
            .catch((error) => {
                console.log("Error loading coaches:", error);
            });
    }, []);

    return (
        <main>
            <h1>Coaches Page</h1>

            {coaches.map((coach) => (
                <div key={coach.id}>
                    <h2>{coach.name}</h2>
                    <p>{coach.belt}</p>
                    <p>{coach.specialty}</p>
                </div>
            ))}
        </main>
    );
}

export default CoachesPage;