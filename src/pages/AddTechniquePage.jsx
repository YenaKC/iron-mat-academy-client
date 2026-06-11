import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTechniquePage() {
    // to save a form
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [position, setPosition] = useState("");
    const [level, setLevel] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTechnique = {
            name,
            category,
            position,
            level,
            description,
            youtubeUrl,
        };

        axios
            .post("http://localhost:5005/techniques", newTechnique)
            .then(() => {
                navigate("/techniques");
            })
            .catch((error) => {
                console.log("Error creating tedhnique:", error);
            });
    };

    return (
        <main>
            <h1>Add New Technique</h1>

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

                <button type="submit">Save Technique</button>
            </form>
        </main>
    );
}

export default AddTechniquePage;