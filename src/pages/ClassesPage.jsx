import { useState, useEffect } from "react";
import axios from "axios";

import ClassCard from "../components/ClassCard";

function ClassesPage() {
    const [classes, setClasses] = useState([]);
    const [selectedDay, setSelectedDay] = useState("All");

    useEffect(() => {
        axios
            .get("https://iron-mat-academy-server.onrender.com/classes")
            .then((response) => {
                setClasses(response.data);
            })
            .catch((error) => {
                console.log("Error loading classes:", error);
            });
    }, []);

    const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const filteredClasses =
        selectedDay === "All"
        ? classes
        : classes.filter((classItem) => classItem.day === selectedDay);

    return (
        <main>
            <h1>Weekly Schedule</h1>

            <section className="day-filter">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={selectedDay === day ? "active-day" : ""}
                    >
                        {day}
                    </button>
                ))}
            </section>

            <section className="classes-grid">
                {filteredClasses.map((classItem) => (
                    <ClassCard
                        key={classItem.id}
                        classItem={classItem}
                    />
                ))}
            </section>
        </main >
    );
}

export default ClassesPage;