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
    const [completedSteps, setCompletedSteps] = useState([]);
    return (
            <BrowserRouter>
                <div>
                    <Routes>
                        {/*no authentication needed*/}
                        <Route path="/" element={<Login/>}/>
                        <Route path="/dashboard" element={<CourseLearningPath/>}/>
                        <Route path="/basicConcepts" element={<BasicConcepts completedSteps={completedSteps} setCompletedSteps={setCompletedSteps}/>}/>
                        <Route path="/programmingLanguage" element={<ProgrammingLanguage completedSteps={completedSteps} setCompletedSteps={setCompletedSteps}/>}/>
                        <Route path="/algorithmsDataStructures" element={<AlgorithmsDataStructures completedSteps={completedSteps} setCompletedSteps={setCompletedSteps}/>}/>
                        <Route path="/simplePrograms" element={<SimplePrograms completedSteps={completedSteps} setCompletedSteps={setCompletedSteps}/>}/>
                        <Route path="/complexPrograms" element={<ComplexPrograms completedSteps={completedSteps} setCompletedSteps={setCompletedSteps}/>}/>
                        <Route path="/signUp" element={<Registration/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default Navigation;
