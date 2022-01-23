import React, { useState } from "react";

import EditExercise from "./EditExercise";

const EditProgram = ({ showEditProgram, workoutData, setWorkoutList }) => {
  const [rerender, setRerender] = useState(true);

  const handleWorkoutNameChange = (event, index) => {
    let temp = workoutData;
    temp[index]["workoutName"] = event.target.value;

    setWorkoutList(temp);
  };

  const handleExerciseChange = (exercises, index) => {
    let temp = workoutData;
    temp[index]["exerciseList"] = exercises;

    setWorkoutList(temp);
  };

  const handleDeleteWorkout = (index) => {
    console.log(index);
    let temp = workoutData;
    temp = temp.splice(index, 1);

    if (index === 0 && temp.length === 1) {
      temp = [];
    }

    setWorkoutList(temp);
    setRerender(!rerender);
  };

  return (
    <div>
      {workoutData
        ? workoutData.map((workout, index) => (
            <div key={index}>
              <div key={index}>
                Workout Name :{" "}
                <input
                  type="text"
                  defaultValue={workout.workoutName}
                  onChange={(event) => handleWorkoutNameChange(event, index)}
                />
                <button onClick={() => handleDeleteWorkout(index)}>
                  Delete Workout
                </button>
                <EditExercise
                  exercises={workout.exerciseList}
                  workoutIndex={index}
                  handleChange={handleExerciseChange}
                />
              </div>
            </div>
          ))
        : null}
      <div>
        <button onClick={() => showEditProgram(false)}>Edit done</button>
      </div>
    </div>
  );
};

export default EditProgram;
