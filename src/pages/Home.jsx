import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import ProgramDays from '../components/ProgramDays';
import ProgramDay from '../components/ProgramDay';

function Home() {
  const [programs, setProgram] = useState(null);

  useEffect(() => {
    // console.log("before",programs);
    const ref = collection(db, 'programs');

    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setProgram(results);
    });
  }, []);

  if (programs) {
    return (
      <>
        <ProgramDays ProgramDays={programs} />
      </>
    );
  }
}

export default Home;
