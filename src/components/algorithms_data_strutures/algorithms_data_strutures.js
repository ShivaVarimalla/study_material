import React, {useEffect, useState} from 'react';

//AlgorithmsDataStructures functional component
const AlgorithmsDataStructures=({ completedSteps = [], setCompletedSteps })=> {
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
                    type: 'video',
                    title: 'Sorting Algorithms Explained',
                    urlList: [
                        {
                            "site": "Sorting Algorithms Visualized - AlgoRythmics",
                            "url" : "https://www.youtube.com/watch?v=kPRA0W1kECg"
                        },
                        {
                            "site": "Sorting Algorithms - mycodeschool",
                            "url" : "https://www.youtube.com/watch?v=f8hXR_Hvybo&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U"
                        },
                    ]
                }
            ]
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

    const progress = ((completedSteps.length / algo.length) * 100).toFixed(0);

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
