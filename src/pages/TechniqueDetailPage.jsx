import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function TechniqueDetailPage() {
    const [technique, setTechnique] = useState(null);

    const { techniqueId } = useParams();

    useEffect(() => {
        axios
            .get(`https://iron-mat-academy-server.onrender.com/techniques/${techniqueId}`)
            .then((response) => {
                setTechnique(response.data);
            })
            .catch((error) => {
                console.log("Error loading technique details:", error);
            });
    }, [techniqueId]);

    if (!technique) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <h1>{technique.name}</h1>
            <p>Category: {technique.category}</p>
            <p>Position: {technique.position}</p>
            <p>Level: {technique.level}</p>
            <p>Description: {technique.description}</p>

            {technique.youtubeUrl && (
                <p>
                    Video:{" "}
                    <a href={technique.youtubeUrl} target="_blank">
                        Watch technique
                    </a>
                </p>
            )}

            <Link to="/techniques">Back</Link>
        </main>
    );
}

export default TechniqueDetailPage;