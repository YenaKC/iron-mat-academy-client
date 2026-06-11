function ClassCard({ classItem }) {
    return(
        <div className="class-card">
            <p className="class-day">{classItem.day}</p>
            <h3>{classItem.title}</h3>
            <p>{classItem.time}</p>
            <p>{classItem.level}</p>
            <p>Coach: {classItem.coach}</p>
        </div>
    );
}

export default ClassCard;