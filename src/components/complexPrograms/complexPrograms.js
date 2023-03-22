import React, {useEffect, useState} from 'react';
import '../dashboard/dashboard.css'

// ComplexPrograms functional component
const ComplexPrograms=({ completedSteps = [], setCompletedSteps })=> {
    const [complexPrograms, setComplexPrograms] = useState([
        {
            id:1,
            title: 'Building Complex Programs',
            description:
                'This step might involve building larger programs that require the student to use the concepts they\'ve learned in a more complex and integrated manner.',
            resources: [
                {
                    id:1,
                    type: 'project',
                    title: 'Building a Blog Site',
                    urlList: [
                        {
                            "site": "Smashing Magazine",
                            "url" : "https://www.smashingmagazine.com/"
                        },
                        {
                            "site": "Medium",
                            "url" : "https://medium.com/"
                        },
                    ]
                },
                {
                    id:2,
                    type: 'tutorial',
                    title: 'Building a Chat Application',
                    urlList: [
                        {
                            "site": "Building a Real-Time Chat Application with Node.js and Socket.io",
                            "url" : "https://socket.io/get-started/chat/"
                        },
                        {
                            "site": "Building a Chat Application with React and Firebase",
                            "url" : "https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/"
                        },
                    ]
                }
            ]
        }
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

    const progress = ((completedSteps.length / complexPrograms.length) * 100).toFixed(0);

    return (
        <div className="container-dashboard box-color4">
            <div className="learning-path-container">
                <div className="progress-bar">
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
                {complexPrograms.map((step, index) => (
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

export default ComplexPrograms;
