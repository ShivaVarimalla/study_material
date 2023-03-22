import React, { useState, useEffect } from 'react';
import '../dashboard/dashboard.css'

//BasicConcepts functional component
const BasicConcepts = ({ completedSteps = [], setCompletedSteps }) => {
    const [concepts, setConcepts] = useState([
        {
            id: 1,
            title: 'Understanding Basic Programming Concepts',
            description:
                'This step might cover concepts like data types, variables, loops, and conditional statements.',
            resources: [
                {
                    id: 1,
                    type: 'article',
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
                    type: 'video',
                    title: 'Programming Basics',
                    urlList: [
                        {
                            site: "Codecademy's Introduction to Programming",
                            url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E',
                        },
                        {
                            site: "Khan Academy's Computer Programming",
                            url: 'https://www.youtube.com/watch?v=quW5dAGpXiU',
                        },
                    ],
                },
            ],
        },
    ]);

    useEffect(() => {
        // Load completed steps from local storage
        const storedCompletedSteps = localStorage.getItem('completedSteps');
        if (storedCompletedSteps) {
            setCompletedSteps(JSON.parse(storedCompletedSteps));
        }
    }, []);

    useEffect(() => {
        // Save completed steps to local storage
        localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    }, [completedSteps]);

    const handleCompleteStep = (stepIndex) => {
        if (!completedSteps.includes(stepIndex)) {
            setCompletedSteps([...completedSteps, stepIndex]);
        }
    };

    const progress = ((completedSteps.length / concepts.length) * 100).toFixed(0);

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

