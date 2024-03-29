import React from 'react';
import "../assets/coursescards.css"; // Assuming you have a separate CSS file for courses

const Courses = () => {
  return (
    <div className="courses-section">
        <div className="card">
            <img src="/images/course1.jpg" alt="Course" className="card-image" />
            <div className="card-details">
                <h3>Course Title</h3>
                <p>Course Description</p>
                <p>Course Rating</p>
                <button>Enroll</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/course1.jpg" alt="Course" className="card-image" />
            <div className="card-details">
                <h3>Course Title</h3>
                <p>Course Description</p>
                <p>Course Rating</p>
                <button>Enroll</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/course1.jpg" alt="Course" className="card-image" />
            <div className="card-details">
                <h3>Course Title</h3>
                <p>Course Description</p>
                <p>Course Rating</p>
                <button>Enroll</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/course1.jpg" alt="Course" className="card-image" />
            <div className="card-details">
                <h3>Course Title</h3>
                <p>Course Description</p>
                <p>Course Rating</p>
                <button>Enroll</button>
            </div>
        </div>
    </div>
  );
};

export default Courses;
