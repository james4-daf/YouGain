//kebab case - ui-context.js
//pscal case - UiContext.js
import React from 'react'
import { data } from '../data';

const UiContext = React.createContext({
    selectedProgram: false,
    selectedExerciseDay: false,
    showExercises: false,
    ExerciseData: data




})


export default UiContext;