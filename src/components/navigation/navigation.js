import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../login/login";
import Registration from "../registration/registration";
import CourseLearningPath from "../dashboard/dashboard";
import BasicConcepts from "../concepts/basicConcepts";
import ProgrammingLanguage from "../programmingLanguage/ProgrammingLanguage";
import AlgorithmsDataStructures from "../algorithms_data_strutures/algorithms_data_strutures";
import SimplePrograms from "../simplePrograms/simplePrograms";
import ComplexPrograms from "../complexPrograms/complexPrograms";

// Navigation functional component
const Navigation=()=> {
    const [completedBasicConcepts, setCompletedBasicConcepts] = useState([]);
    const [completedProgrammingLanguage, setCompletedProgrammingLanguage] = useState([]);
    const [completedAlgorithmsDataStructures, setCompletedAlgorithmsDataStructures] = useState([]);
    const [completedSimplePrograms, setCompletedSimplePrograms] = useState([]);
    const [completedComplexPrograms, setCompletedComplexPrograms] = useState([]);
    return (
            <BrowserRouter>
                <div>
                    <Routes>
                        {/*no authentication needed*/}
                        <Route path="/" element={<Login/>}/>
                        <Route path="/dashboard" element={<CourseLearningPath/>}/>
                        <Route path="/basicConcepts" element={<BasicConcepts completedBasicConcepts={completedBasicConcepts} setCompletedBasicConcepts={setCompletedBasicConcepts}/>}/>
                        <Route path="/programmingLanguage" element={<ProgrammingLanguage completedProgrammingLanguage={completedProgrammingLanguage} setCompletedProgrammingLanguage={setCompletedProgrammingLanguage}/>}/>
                        <Route path="/algorithmsDataStructures" element={<AlgorithmsDataStructures completedAlgorithmsDataStructures={completedAlgorithmsDataStructures} setCompletedAlgorithmsDataStructures={setCompletedAlgorithmsDataStructures}/>}/>
                        <Route path="/simplePrograms" element={<SimplePrograms completedSimplePrograms={completedSimplePrograms} setCompletedSimplePrograms={setCompletedSimplePrograms}/>}/>
                        <Route path="/complexPrograms" element={<ComplexPrograms completedComplexPrograms={completedComplexPrograms} setCompletedComplexPrograms={setCompletedComplexPrograms}/>}/>
                        <Route path="/signUp" element={<Registration/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default Navigation;
