function ClassCard({ classItem }) {
    return(
        <div>
            <h2>{classItem.title}</h2>
            <p>{classItem.day}</p>
            <p>{classItem.time}</p>
            <p>{classItem.level}</p>
            <p>Coach: {classItem.coach}</p>
        </div>
    );
}

export default ClassCard;