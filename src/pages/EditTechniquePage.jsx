import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditTechniquePage() {
    // to update a selected form
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [position, setPosition] = useState("");
    const [level, setLevel] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");

    const { techniqueId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://iron-mat-academy-server.onrender.com/techniques/${techniqueId}`)
            .then((response) => {
                setName(response.data.name);
                setCategory(response.data.category);
                setPosition(response.data.position);
                setLevel(response.data.level);
                setDescription(response.data.description);
                setYoutubeUrl(response.data.youtubeUrl);
            })
            .catch((error) => {
                console.log("Error loading technique:", error);
            });
    }, [techniqueId]);

    const handleSubmit = (event) => {
        event.preventDefault();

        constupdatedTechnique = {
            name,
            category,
            position,
            level,
            description,
            youtubeUrl,
        };

        axios
            .put(`https://iron-mat-academy-server.onrender.com/techniques/${techniqueId}`, updatedTechnique)
            .then(() => {
                navigate("/techniques");
            })
            .catch((error) => {
                console.log("Error updating technique:", error);
            });
    };

    return (
        <main>
            <h1>Edit Technique</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <label>Position</label>
                <input
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                />

                <label>Level</label>
                <input
                    type="text"
                    value={level}
                    onChange={(event) => setLevel(event.target.value)}
                />

                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <label>YouTube URL</label>
                <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(event) => setYoutubeUrl(event.target.value)}
                />

                <button type="submit">Update Technique</button>
            </form>
        </main>
    );
}

export default EditTechniquePage;