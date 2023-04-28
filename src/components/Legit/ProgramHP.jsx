import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import UiContext from '../../store/ui-context';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function ProgramHP() {
  const { programName } = useParams();
  //   console.log(programName);
  //   console.log(typeof programName);
  const ctx = useContext(UiContext);
  //const programNames = ctx.ExerciseData[0].Moviestar;
  //   console.log(typeof programNames);

  // const programData = ctx.ExerciseData.filter(
  //   (program) => Object.keys(program) === programName,
  // );
  // const programData = ctx.ExerciseData.find((obj) =>
  //   Object.keys(obj).some((key) => key.includes(programName)),
  // );

  //aconsole.log(programData);
  const programObj = ctx.ExerciseData[0][programName];
  console.log(programObj);
  const programDays = Object.keys(programObj.WorkoutDays);
  //console.log(Object.keys(programObj));
  return (
    <div>
      <h1>{programName}</h1>

      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {programDays.map((day, i) => {
          return (
            <Button key={i} onClick={ctx.onShowExercises}>
              {day}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default ProgramHP;
