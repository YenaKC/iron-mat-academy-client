import { Link } from "react-router-dom";

function TechniqueCard({ technique, onDelete }) {
    return (
        <div>
            <h2>{technique.name}</h2>
            <p>{technique.category}</p>
            <p>{technique.level}</p>

            <Link to={`/techniques/${technique.id}/edit`}>Edit</Link>

            <button onClick={() => onDelete(technique.id)}>
                Delete
            </button>
        </div>
    );
}

export default TechniqueCard;