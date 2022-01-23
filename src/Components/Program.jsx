import React, { useEffect } from "react";
import { useState } from "react";

import Workout from "./Workout";
import WorkoutList from "./WorkoutList";
import EditProgram from "./EditProgram";

const Program = () => {
  const [programName, setProgramName] = useState("");
  const [trainerName, setTrainerName] = useState("");
  const [duration, setDuration] = useState(0);
  const [cost, setCost] = useState(0);
  const [workoutList, setWorkoutList] = useState([]);

  const [showWorkout, setShowWorkout] = useState(false);

  const [showEditProgram, setShowEditProgram] = useState(false);

  const [programData, setProgramData] = useState({});

  let trainerId = 2;
  // get trainer id from cookie
  useEffect(() => {
    setProgramData({
      programName: programName,
      trainerName: trainerName,
      duration: duration,
      cost: cost,
      workoutList: workoutList,
      trainerId: trainerId,
    });
  }, [programName, trainerName, duration, cost, workoutList, trainerId]);

  const handleSubmitProgram = async () => {
    if (workoutList.length === 0) {
      alert("Workout Empty");
    } else if (programName === "") {
      alert("Enter Program Name");
    } else if (trainerName === "") {
      alert("Enter Trainer Name ");
    } else if (duration === 0) {
      alert("Enter Duration");
    } else if (cost === 0) {
      alert("Enter Cost");
    } else {
      await fetch("http://localhost:8000/api/programs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(programData),
      });
    }
  };

  const handleWorkoutList = (workoutdata) => {
    setWorkoutList((workoutList) => [...workoutList, workoutdata]);
  };

  return (
    <div>
      <div>
        Program Name
        <input
          type="text"
          onChange={(event) => setProgramName(event.target.value)}
          placeholder="Program Name"
        />
        Trainer Name
        <input
          type="text"
          onChange={(event) => setTrainerName(event.target.value)}
          placeholder="Trainer Name"
        />
        Duration
        <input
          type="number"
          onChange={(event) => setDuration(event.target.value)}
          placeholder="Duration"
        />
        Cost
        <input
          type="number"
          onChange={(event) => setCost(event.target.value)}
          placeholder="In INR"
        />
      </div>

      <div>
        {showEditProgram ? null : <WorkoutList workoutTable={workoutList} />}
      </div>
      {showWorkout ? (
        <div>
          <Workout
            submitWorkout={handleWorkoutList}
            handleShowWorkout={setShowWorkout}
          />
        </div>
      ) : (
        <div>
          <button onClick={() => setShowWorkout(true)}> Add Workout </button>
        </div>
      )}

      <div>
        {showEditProgram ? null : (
          <button onClick={() => setShowEditProgram(true)}>Edit Program</button>
        )}
      </div>
      <div>
        <button onClick={handleSubmitProgram}>Submit Program</button>
      </div>

      <div>
        {showEditProgram ? (
          <EditProgram
            showEditProgram={setShowEditProgram}
            workoutData={workoutList}
            setWorkoutList={setWorkoutList}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Program;
