import React from 'react'


function ProgramDays(props) {


    const movieStarProgram = props.ProgramDays.find((name) => name.ProgramName == "Moviestar");
   console.log("legitProgra,",movieStarProgram)
       const { ProgramDays } = movieStarProgram || {};
    
    //console.log("fekjwfbewkjbwkj",props.ProgramDays)
   

    return (
    <div>hi
       {ProgramDays.map((item, index) => {
          const day = Object.keys(item)[0]; // Extract day from the object key
          return <li key={index}>{day}</li>;
        })}
    </div>
  )
}

export default ProgramDays