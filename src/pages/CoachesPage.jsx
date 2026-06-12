import { useEffect, useState } from "react";
import axios from "axios";

import alexPhoto from "../assets/coach-alex.png";
import alexDrawing from "../assets/coach-alex-drawing.png";
import mayaPhoto from "../assets/coach-maya.png";
import mayaDrawing from "../assets/coach-maya-drawing.png";
import leoPhoto from "../assets/coach-leo.png";
import leoDrawing from "../assets/coach-leo-drawing.png";
import ninaPhoto from "../assets/coach-nina.png";
import ninaDrawing from "../assets/coach-nina-drawing.png";
import minjiPhoto from "../assets/coach-minji.png";
import minjiDrawing from "../assets/coach-minji-drawing.png";
import harutoPhoto from "../assets/coach-haruto.png";
import harutoDrawing from "../assets/coach-haruto-drawing.png";
import rafaelPhoto from "../assets/coach-rafael.png";
import rafaelDrawing from "../assets/coach-rafael-drawing.png";
import raulPhoto from "../assets/coach-raul.png";
import raulDrawing from "../assets/coach-raul-drawing.png";

import CoachCard from "../components/CoachCard";

function CoachesPage() {
    const [coaches, setCoaches] = useState([]);

    // coach image mapping
    const coachImage = {
        "Coach Alex": {
            photoImage: alexPhoto,
            drawingImage: alexDrawing,
        },
        "Coach Maya": {
            photoImage: mayaPhoto,
            drawingImage: mayaDrawing,
        },
        "Coach Leo": {
            photoImage: leoPhoto,
            drawingImage: leoDrawing,
        },
        "Coach Nina": {
            photoImage: ninaPhoto,
            drawingImage: ninaDrawing,
        },
        "Coach Minji": {
            photoImage: minjiPhoto,
            drawingImage: minjiDrawing,
        },
        "Coach Haruto": {
            photoImage: harutoPhoto,
            drawingImage: harutoDrawing,
        },
        "Coach Rafael": {
            photoImage: rafaelPhoto,
            drawingImage: rafaelDrawing,
        },
        "Coach Raul": {
            photoImage: raulPhoto,
            drawingImage: raulDrawing,
        },
    }

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
                        coach={{
                            ...coach,
                            ...coachImages[coach.name]
                        }}
                    />
                ))}
            </section>
        </main>
    );
}

export default CoachesPage;