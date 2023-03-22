import React from 'react';
import './dashboard.css'
import LearningPath from "../learningPath/learningPath";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

// DashBoard functional component
const CourseLearningPath = () => {
    return (
        <div className="container-fluid">
            <Nav/>
            <div className="learning-path-container">
                <LearningPath/>
            </div>
            <Footer/>
        </div>

    );
};

export default CourseLearningPath;

