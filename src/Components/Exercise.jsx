import React, { useEffect, useState } from "react";
import ExerciseDropdown from "./ExerciseDropdown";

const Exercise = ({ handleExercise }) => {
  const [exerciseId, setExerciseId] = useState();
  const [exerciseName, setExerciseName] = useState("");
  const [set, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);

  const [exercise, setExercise] = useState({});

  useEffect(() => {
    setExercise({
      exerciseId: exerciseId,
      exerciseName: exerciseName,
      sets: set,
      reps: reps,
      rest: rest,
    });
  }, [exerciseId, exerciseName, set, reps, rest]);

  const onclick = () => {
    if (exerciseId === undefined) {
      alert("Select Exercise");
    } else {
      handleExercise(exercise);
    }
  };

  const handleExerciseId = (id) => {
    setExerciseId(id.value);
    setExerciseName(id.label);
  };

  return (
    <div>
      <div>
        Exercise :
        <ExerciseDropdown setId={handleExerciseId} />
      </div>

      <div>
        Sets :
        <input
          type="number"
          onChange={(event) => setSets(event.target.value)}
        />
      </div>

      <div>
        Reps :
        <input
          type="number"
          onChange={(event) => setReps(event.target.value)}
        />
      </div>
      <div>
        Rest :
        <input
          type="number"
          onChange={(event) => setRest(event.target.value)}
        />
      </div>

      <div>
        <button onClick={onclick}>Submit Exercise</button>
      </div>
    </div>
  );
};

export default Exercise;
