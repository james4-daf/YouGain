import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';

import './App.css';
import UiContext from './store/ui-context';
import { useState } from 'react';
import { data } from './data';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import ProgramHP from './components/Legit/ProgramHP';
import NoMatch from './components/Legit/NoMatch';
import HomePage from './components/Legit/HomePage';

export default function App() {
  const movieStarProgram = data;
  const movieStarProgramName = Object.keys(movieStarProgram[0])[0];
  //console.log('data foreal', Object.keys(movieStarProgram[0])[0]);

  // const router = createBrowserRouter([
  //   { path: `/:${movieStarProgramName}`, element: <ProgramHP /> },
  //   { path: '/', element: <Home /> },
  // ]);
  const [showExercises, setShowExercises] = useState(true);

  const [selectedProgram, setSelectedProgram] = useState(false);
  const [selectedExerciseDay, setSelectedExerciseDay] = useState(false);

  const showExercisesHandler = () => {
    setShowExercises(!showExercises);
  };
  return (
    <>
      <NavBar />
      <UiContext.Provider
        value={{
          selectedProgram: selectedProgram,
          selectedExerciseDay: selectedExerciseDay,
          showExercises: showExercises,
          setShowExercises,
          onShowExercises: showExercisesHandler,
          ExerciseData: data,
        }}
      >
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path={`/:programName`} element={<ProgramHP />} />
          <Route path={`/`} element={<HomePage />} />
        </Routes>
      </UiContext.Provider>
    </>
  );
}
