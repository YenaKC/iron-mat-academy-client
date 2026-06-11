function CoachCard({ coach }) {
    return (
        <div className="coach-card">
            <div className="coach-image-wrapper">
                <img
                    className="coach-image coach-drawing"
                    src={coach.drawingImage}
                    alt={`${coach.name} drawing`}
                />

                <img
                    className="coach-image coach-photo"
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