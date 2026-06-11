import { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "../components/ClassCard";

function ClassesPage() {
    const [classes, setClasses] = useState([]);

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

    return (
        <main>
            <h1>Weekly Schedule</h1>

            {classes.map((classItem) => {
                <ClassCard key={classItem.id} classItem={classItem} />
            })}
        </main >
    );
}

export default ClassesPage;