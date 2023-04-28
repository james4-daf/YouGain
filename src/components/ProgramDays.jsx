import React from 'react';
import ProgramDay from './ProgramDay';

function ProgramDays(props) {
  const movieStarProgram = props.ProgramDays.find(
    (name) => name.ProgramName == 'Moviestar',
  );
  const { ProgramDays } = movieStarProgram || {};

  return (
    <>
      {/* {ProgramDays.map((item, index) => {
        const day = Object.keys(item)[0]; // Extract day from the object key
        return <li key={index}>{day}</li>;
      })} */}
      <ProgramDay data={ProgramDays} />
    </>
  );
}

export default ProgramDays;
