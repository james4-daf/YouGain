import React from 'react';
import Exercise from './exercise/Exercise';
import Divider from '@mui/material/Divider';
import DaysOfSplit from './exercise/DaysOfSplit';
import { useContext, useState } from 'react';
import UiContext from '../store/ui-context';

function ProgramDay(props) {
  const ctx = useContext(UiContext);
  const movieStarProgram = ctx.ExerciseData[0].Moviestar.WorkoutDays;
  const movieStarProgramDays = Object.keys(movieStarProgram);
  // console.log('first:', movieStarProgramDays);
  // console.log('type:', typeof movieStarProgram);

  // console.log(props.data)

  const monday = props.data.find((programDay) =>
    programDay.hasOwnProperty('Monday'),
  );
  //    console.log(monday)

  return (
    <div>
      {/* <ul>
        {Object.keys(monday).map((day) => (
          <li key={day}>
            <strong>{day}:</strong>
            <ul>
              {Object.keys(monday[day]).map((exercise) => (
                <li key={exercise}>
                  <strong>{exercise}:</strong>
                  <ul>
                    {Object.keys(monday[day][exercise]).map((prop) => (
                      <li key={prop}>
                        <strong>{prop}:</strong> {monday[day][exercise][prop]}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      <DaysOfSplit days={['Upper A', 'Lower A', 'Upper B', 'Lower B']} />
      <Divider />
      <DaysOfSplit days={movieStarProgramDays} />
      <h1>Exercises</h1>
      <Divider />

      <Exercise
        orderNum={1}
        exerciseName={'Incline Bench Press'}
        noOfSets={'4'}
        reps={'6-8'}
      />
      <Exercise
        orderNum={2}
        exerciseName={'Flat Press'}
        noOfSets={'4'}
        reps={'6-8'}
      />
    </div>
  );
}

export default ProgramDay;
