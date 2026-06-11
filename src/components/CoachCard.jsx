function CoachCard({ coach }) {
    return(
        <div>
            <h2>{coach.name}</h2>
            <p>{coach.belt}</p>
            <p>{coach.specialty}</p>
        </div>
    );
}

export default CoachCard;