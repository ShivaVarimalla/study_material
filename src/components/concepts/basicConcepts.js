import React, { useState, useEffect } from 'react';
import '../dashboard/dashboard.css'
import {useNavigate} from "react-router-dom";

//BasicConcepts functional component
const BasicConcepts = ({ completedBasicConcepts = [], setCompletedBasicConcepts }) => {
    const navigate = useNavigate();
    const [concepts, setConcepts] = useState([
        {
            id: 1,
            title: 'Understanding Basic Programming Concepts',
            description:
                'This step might cover concepts like data types, variables, loops, and conditional statements.',
            resources: [
                {
                    id: 1,
                    type: 'Article',
                    title: 'A Beginner’s Guide to Programming Concepts',
                    urlList: [
                        {
                            site: "Codecademy's Introduction to Programming",
                            url: 'https://www.codecademy.com/learn/introduction-to-programming',
                        },
                        {
                            site: "Khan Academy's Computer Programming",
                            url: 'https://www.khanacademy.org/computing/computer-programming',
                        },
                    ],
                },
                {
                    id: 2,
                    type: 'Exercise',
                    title: 'Programming Basics',
                    urlList: [
                        {
                            site: "Codecademy's Introduction to Programming",
                            url: 'https://www.w3schools.com/quiztest/quiztest.asp?qtest=Basic',
                        },
                        {
                            site: "Khan Academy's Computer Programming",
                            url: 'https://www.hackerrank.com/domains/python/py-introduction',
                        },
                    ],
                },
            ],
        },
    ]);

    useEffect(() => {
        // Load completed steps from local storage
        const storedCompletedSteps = localStorage.getItem('completedBasicConcepts');
        if (storedCompletedSteps) {
            setCompletedBasicConcepts(JSON.parse(storedCompletedSteps));
        }
    }, []);

    useEffect(() => {
        // Save completed steps to local storage
        localStorage.setItem('completedBasicConcepts', JSON.stringify(completedBasicConcepts));
    }, [completedBasicConcepts]);

    const handleCompleteStep = (stepIndex) => {
        if (!completedBasicConcepts.includes(stepIndex)) {
            setCompletedBasicConcepts([...completedBasicConcepts, stepIndex]);
            setTimeout(()=>{navigate('/dashboard')}, 2000);
        }
    };

    const progress = ((completedBasicConcepts.length / concepts.length) * 100).toFixed(0);

    return (
        <div className="container-dashboard box-color">
            <div className="learning-path-container">
                <div className="progress-bar">
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
                {concepts.map((step, index) => (
                    <ol key={index}>
                        <li>
                            <h2>{step.title}</h2>
                            <p>{step.description}</p>
                            <div className="resources-container">
                                <h3>Resources:</h3>
                                <ul>
                                    {step.resources.map((resource, index) => (
                                        <li key={index}>
                                            <h3>{resource.title}</h3>
                                            <ul>
                                                {resource.urlList.map((value, index) => (
                                                    <li key={index}>
                                                        <a href={value.url}>{value.site}</a> ({resource.type})
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn btn-success" onClick={() => handleCompleteStep(index)}>Complete this lesson</button>
                        </li>
                    </ol>
                ))}
            </div>
        </div>
    )
};

export default BasicConcepts;

