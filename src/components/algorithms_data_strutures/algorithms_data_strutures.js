import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

//AlgorithmsDataStructures functional component
const AlgorithmsDataStructures=({ completedAlgorithmsDataStructures = [], setCompletedAlgorithmsDataStructures })=> {
    const navigate = useNavigate();
    const [algo, setAlgo] = useState([
        {
            id:1,
            title: 'Understanding Algorithms and Data Structures',
            description:
                'This step might cover concepts like arrays, linked lists, stacks, queues, sorting algorithms, and searching algorithms.',
            resources: [
                {
                    id:1,
                    type: 'article',
                    title: 'Introduction to Data Structures',
                    urlList: [
                        {
                            "site": "Intro to Data Structures",
                            "url" : "https://www.tutorialspoint.com/data_structures_algorithms/data_structures_basics.htm"
                        },
                        {
                            "site": "Data Structures and Algorithms",
                            "url" : "https://www.geeksforgeeks.org/data-structures/"
                        },
                    ]
                },
                {
                    id:2,
                    type: 'Exercise',
                    title: 'Sorting Algorithms Explained',
                    urlList: [
                        {
                            "site": "Sorting Algorithms Visualized",
                            "url" : "https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/"
                        },
                        {
                            "site": "Sorting Algorithms",
                            "url" : "https://www.hackerrank.com/domains/algorithms/arrays-and-sorting/difficulty:true/page:1"
                        },
                    ]
                }
            ]
        },
    ]);

    useEffect(() => {
        // Load completed steps from local storage
        const storedCompletedSteps = localStorage.getItem('completedAlgorithmsDataStructures');
        if (storedCompletedSteps) {
            setCompletedAlgorithmsDataStructures(JSON.parse(storedCompletedSteps));
        }
    }, []);

    useEffect(() => {
        // Save completed steps to local storage
        localStorage.setItem('completedAlgorithmsDataStructures', JSON.stringify(completedAlgorithmsDataStructures));
    }, [completedAlgorithmsDataStructures]);

    const handleCompleteStep = (stepIndex) => {
        if (!completedAlgorithmsDataStructures.includes(stepIndex)) {
            setCompletedAlgorithmsDataStructures([...completedAlgorithmsDataStructures, stepIndex]);
            setTimeout(()=>{navigate('/dashboard')}, 2000);
        }
    };

    const progress = ((completedAlgorithmsDataStructures.length / algo.length) * 100).toFixed(0);

    return (
        <div className="container-dashboard box-color2">
            <div className="learning-path-container">
                <div className="progress-bar">
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
                {algo.map((step, index) => (
                    <ol key={index}>
                        <li>
                            <h2>{step.title}</h2>
                            <p>
                                {step.description}
                            </p>
                            <div className="resources-container">
                                <h3>Resources:</h3>
                                <ul>
                                    {step.resources.map((resource, index) => (
                                        <li key={index}>
                                            <h3>{resource.title}</h3>
                                            <ul>
                                                {
                                                    resource.urlList.map((value,index)=>(
                                                        <li key={index}>
                                                            <a href={value.url}>{value.site}</a> ({resource.type})
                                                        </li>
                                                    ))
                                                }
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
    );
}

export default AlgorithmsDataStructures;
