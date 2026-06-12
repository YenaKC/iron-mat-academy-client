function CoachCard({ coach }) {
    return (
        <div className="coach-card">
            <div className="coach-image-wrapper">
                <img
                    className="coach-image coach-drawing"
                    src={coach.drawingImage}
                    alt={`${coach.name} drawing`}
                />

                {/* Para que no se ve cortado la foto de Raul */}
                <img
                    className={`coach-image coach-photo ${coach.name === "Coach Raul" ? "raul-photo" : ""}`}
                    src={coach.photoImage}
                    alt={`${coach.name} photo`}
                />
            </div>

            <h2>{coach.name}</h2>
            <p>{coach.belt}</p>
            <p>{coach.specialty}</p>
        </div>
    );
}

export default CoachCard;