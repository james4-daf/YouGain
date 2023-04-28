import React, { useContext, useState } from 'react';
import Divider from '@mui/material/Divider';
import UiContext from '../../store/ui-context';

function Exercise(props) {
  const { orderNum, exerciseName, noOfSets, reps } = props;
  const ctx = useContext(UiContext);
  const movieStarProgram = ctx.ExerciseData[0].Moviestar.WorkoutDays;
  const upperLowerProgram = ctx.ExerciseData[0].UpperLower.WorkoutDays;
  // console.log("object is:",ctx.selectedProgram)
  //  console.log("real data 1:", upperLowerProgram)
  // console.log("real data 2:", movieStarProgram)

  return ctx.showExercises ? (
    <div className="container">
      <h2>{`${orderNum}. ${exerciseName}`}</h2>
      <div className="ExerciseGuidlines">
        <h3 className="sets">Sets: {noOfSets}</h3>
        <h3>Reps: {reps}</h3>
      </div>

      <Divider />
    </div>
  ) : (
    ''
  );
}

export default Exercise;
