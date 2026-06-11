import { Link } from "react-router-dom";

function TechniqueCard({ technique, onDelete }) {
    return (
        <div className="technique-card">
            <h3>{technique.name}</h3>
            <p>{technique.category}</p>
            <p>{technique.level}</p>

            <div className="card-actions">
                <Link to={`/techniques/${technique.id}`}>Details</Link>
                <Link to={`/techniques/${technique.id}/edit`}>Edit</Link>
                <button onClick={() => onDelete(technique.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TechniqueCard;