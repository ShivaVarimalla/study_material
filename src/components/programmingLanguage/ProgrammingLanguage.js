import React, {useEffect, useState} from 'react';
import '../dashboard/dashboard.css'

// ProgrammingLanguage functional component
const ProgrammingLanguage=({ completedSteps = [], setCompletedSteps })=> {
    const [language, setLanguage] = useState([
        {
            id:1,
            title: 'Learning a Programming Language',
            description:
                'This step might involve selecting a programming language like Python, Java, or JavaScript and learning the basics of that language.',
            resources: [
                {
                    id: 1,
                    type: 'tutorial',
                    title: 'Learn Python',
                    urlList: [
                        {
                            "site": "Python for Everybody",
                            "url" : "https://www.py4e.com/lessons"
                        },
                        {
                            "site": "Codecademy's Python Course",
                            "url" : "https://www.codecademy.com/learn/learn-python"
                        },
                    ]
                },
                {
                    id: 2,
                    type: 'exercise',
                    title: 'Programming Language Basics Quiz',
                    urlList: [
                        {
                            "site": "W3Schools",
                            "url" : "https://www.w3schools.com/quiztest/quiztest.asp?qtest=Basic"
                        },
                        {
                            "site": "HackerRank",
                            "url" : "https://www.hackerrank.com/domains/python/py-introduction"
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

    const progress = ((completedSteps.length / language.length) * 100).toFixed(0);
    return (
       <div className="container-dashboard box-color1">
           <div className="learning-path-container">
               <div className="progress-bar">
                   <div className="progress" style={{width: `${progress}%`}}></div>
               </div>
               {language.map((step, index) => (
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

export default ProgrammingLanguage;
