import { useEffect, useState } from "react";
import axios from "axios";
import TechniqueCard from "../components/TechniqueCard";

function TechniquesPage() {
    const [techniques, setTechniques] = useState([]);

    // Search
    const [searchTerm, setSearchTerm] = useState("");

    // Delete
    const handleDelete = (id) => {
        axios
            .delete(`https://iron-mat-academy-server.onrender.com/techniques/${id}`)
            .then(() => {
                setTechniques(
                    techniques.filter(
                        (technique) => technique.id !== id
                    )
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get("https://iron-mat-academy-server.onrender.com/techniques")
            .then((response) => {
                setTechniques(response.data);
            })
            .catch((error) => {
                console.log("Error loading techniques:", error);
            });
    }, []);

    // Filter
    const filteredTechniques = techniques.filter((technique) => {
        return technique.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <main>
            <h1>Techniques</h1>

            {/* Input for searchbar */}
            <input
                className="techniques-search"
                type="text"
                placeholder="Search techniques..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {/* To search organized and filtered data */}
            <section className="techniques-grid">

                {filteredTechniques.map((technique) => (
                    <TechniqueCard
                        key={technique.id}
                        technique={technique}
                        onDelete={handleDelete}
                    />
                ))}
            </section>
        </main>
    );
}

export default TechniquesPage;