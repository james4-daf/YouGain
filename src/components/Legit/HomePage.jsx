import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import UiContext from '../../store/ui-context';
import { Link } from 'react-router-dom';

function HomePage() {
  const ctx = useContext(UiContext);
  const programNames = Object.keys(ctx.ExerciseData[0]);
  return (
    <div>
      <h2>Enrolled Programs</h2>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {programNames.map((program) => {
          return (
            <Button>
              <Link to={`/${program}`}>{program}</Link>
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default HomePage;
