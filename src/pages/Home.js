import React from 'react';
import NavBar from '../components/NavBar';
import LawyersSection from '../components/Lawyers';
import CoursesSection from '../components/Courses';
import '../assets/Home.css';
import '../assets/NavBar.css';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home-content">
        <div className="home-hero">
          <h1>Behind Bars</h1>
          <p>Connecting inmates with legal representation and educational resources</p>
        </div>
        {/* <div className="home-features">
          <div className="feature">
            <h3>Find a Lawyer</h3>
            <p>Search our directory of lawyers who specialize in criminal defense to find the right representation for your case.</p>
          </div>
          <div className="feature">
            <h3>Take a Course</h3>
            <p>Choose from our list of courses to further your education while incarcerated and prepare for life after prison.</p>
          </div>
        </div> */}
        <div className="home-section">
          <h2>Meet Your Lawyers</h2>
          <LawyersSection />
        </div>
        <div className="home-section">
          <h2>Read and Learn</h2>
          <CoursesSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
