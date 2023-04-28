import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import  {useContext} from 'react'

import UiContext from '../../store/ui-context';

function DaysOfSplit(props) {
    const {days} = props
    console.log("days", days)
    const ctx =useContext(UiContext)
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">

    {days.map((day,i) => {
        return <Button key={i} onClick={ctx.onShowExercises}>{day}</Button>
    })}
    </ButtonGroup>
  )
}

export default DaysOfSplit