import React, { useEffect, useState } from 'react'
import {db} from '../firebase/config';
import {collection, getDocs} from 'firebase/firestore'
import ProgramDays from '../components/ProgramDays';


function Home() {

       const [programs, setProgram] =useState(null)

    useEffect(()=> {
       // console.log("before",programs);
        const ref = collection(db,'programs')

        getDocs(ref).then((snapshot)=> {
            let results =[]
            snapshot.docs.forEach(doc => {
                results.push({id:doc.id,...doc.data()})
            })
            setProgram(results)
        })
        console.log(programs)
    },[])
    // const movieStarProgram = programs&& programs.find((name) => name.ProgramName == "Moviestar");
    // console.log("legit",movieStarProgram)
    
 console.log("legit2",programs)
    // const { ProgramDays } = movieStarProgram || {};
    // console.log("program days:", ProgramDays);

    if(programs) {
    return (
    <div>

    <ProgramDays ProgramDays={programs}/>
    
       
    </div>
  )
}
}

export default Home