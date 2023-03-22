import React from 'react';
import './learningPath.css';
import {useNavigate} from "react-router-dom";

// LearningPath functional component
const LearningPath=()=> {
    const navigate = useNavigate()
    return (
        <div className="learning-path-container">
            <h1>Course Learning Path</h1>
            <ol>
                <li className="container-dashboard box-color">
                    <h2>Understanding Basic Programming Concepts</h2>
                    <p>
                        This step covers concepts like data types, variables, loops, and conditional statements.
                    </p>
                    <div className="resources-container">
                        <button onClick={()=> navigate('/basicConcepts')} type="button" className="btn btn-success">Click to start the course</button>
                    </div>
                </li>
                <li className="container-dashboard box-color1">
                    <h2>Learning a Programming Language</h2>
                    <p>
                        This step involves selecting a programming language like Python, Java, or JavaScript and learning the basics of that language.
                    </p>
                    <div className="resources-container">
                        <button onClick={()=> navigate('/programmingLanguage')} type="button" className="btn btn-success">Click to start the course</button>
                    </div>
                </li>
                <li className="container-dashboard box-color2">
                    <h2>Understanding Algorithms and Data Structures</h2>
                    <p>
                        This step covers concepts like arrays, linked lists, stacks, queues, sorting algorithms, and searching algorithms.
                    </p>
                    <div className="resources-container">
                        <button onClick={()=> navigate('/algorithmsDataStructures')} type="button" className="btn btn-success">Click to start the course</button>
                    </div>
                </li>
                <li className="container-dashboard box-color3">
                    <h2>Building Simple Programs</h2>
                    <p>
                        This step involves writing simple programs that demonstrate the concepts covered in the previous steps.
                    </p>
                    <div className="resources-container">
                        <button onClick={()=> navigate('/simplePrograms')} type="button" className="btn btn-success">Click to start the course</button>
                    </div>
                </li>
                <li className="container-dashboard box-color4">
                    <h2>Building Complex Programs</h2>
                    <p>
                        This step involves building larger programs that require the student to use the concepts they've learned in a more complex and integrated manner.
                    </p>
                    <div className="resources-container">
                        <button onClick={()=> navigate('/complexPrograms')} type="button" className="btn btn-success">Click to start the course</button>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default LearningPath;
