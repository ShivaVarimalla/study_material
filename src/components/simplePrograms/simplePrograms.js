import React, {useEffect, useState} from 'react';
import '../dashboard/dashboard.css'
import {useNavigate} from "react-router-dom";

// SimplePrograms functional component
const SimplePrograms=({ completedSimplePrograms = [], setCompletedSimplePrograms })=> {
    const navigate = useNavigate();
    const [programs, setPrograms] = useState([
        {
            id:1,
            title: 'Building Simple Programs',
            description:
                'This step might involve writing simple programs that demonstrate the concepts covered in the previous steps.',
            resources: [
                {
                    id:1,
                    type: 'exercise',
                    title: 'Building a Calculator',
                    urlList: [
                        {
                            "site": "React Calculator",
                            "url" : "https://codesandbox.io/s/react-calculator-kjzlp"
                        },
                        {
                            "site": "Angular Calculator",
                            "url" : "https://stackblitz.com/edit/angular-calculator-app"
                        },
                    ]
                },
                {
                    id:2,
                    type: 'tutorial',
                    title: 'Building a To-Do List App',
                    urlList: [
                        {
                            "site": "React To-Do List App Tutorial",
                            "url" : "https://www.freecodecamp.org/news/how-to-build-a-todo-list-with-react-hooks-ebaa4e3db3b/"
                        },
                        {
                            "site": "Django To-Do List App Tutorial",
                            "url" : "https://www.digitalocean.com/community/tutorials/how-to-build-a-to-do-application-using-django-and-react"
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
            setCompletedSimplePrograms(JSON.parse(storedCompletedSteps));
        }
    }, []);

    useEffect(() => {
        // Save completed steps to local storage
        localStorage.setItem('completedSteps', JSON.stringify(completedSimplePrograms));
    }, [completedSimplePrograms]);

    const handleCompleteStep = (stepIndex) => {
        if (!completedSimplePrograms.includes(stepIndex)) {
            setCompletedSimplePrograms([...completedSimplePrograms, stepIndex]);
            setTimeout(()=>{navigate('/dashboard')}, 2000);
        }
    };

    const progress = ((completedSimplePrograms.length / programs.length) * 100).toFixed(0);

    return (
        <div className="container-dashboard box-color3">
            <div className="learning-path-container">
                <div className="progress-bar">
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
                {programs.map((step, index) => (
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

export default SimplePrograms;
