const WorkoutList = ({ workoutTable }) => {
  return (
    <div>
      {workoutTable
        ? workoutTable.map((workout, index) => (
            <p key={index}>{workout.workoutName} </p>
          ))
        : null}
    </div>
  );
};

export default WorkoutList;
