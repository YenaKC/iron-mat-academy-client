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
            <h1>Coaches</h1>

            <section className="coaches-grid">
                {coaches.map((coach) => (
                    <CoachCard 
                        key={coach.id}
                        coach={coach}
                    />
                ))}
            </section>
        </main>
    );
}

export default CoachesPage;