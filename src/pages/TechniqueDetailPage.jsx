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

            <section className="technique-detail">
                <div className="technique-video">
                    {technique.youtubeUrl ? (
                        <iframe
                            src={technique.youtubeUrl.replace("youtu.be/", "www.youtube.com/embed/").split("?")[0]}
                            title={technique.name}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No video available.</p>
                    )}
                </div>

                <div className="technique-info">

                    <p>Category: {technique.category}</p>
                    <p>Position: {technique.position}</p>
                    <p>Level: {technique.level}</p>
                    <p>Description: {technique.description}</p>

                    <Link to="/techniques">Back</Link>
                </div>
            </section>
        </main>
    );
}

export default TechniqueDetailPage;