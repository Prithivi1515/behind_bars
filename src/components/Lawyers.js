import React from 'react';
import "../assets/lawyerscards.css";

const Lawyers = () => {
  return (
    <div className="lawyers-section">
        <div className="card">
        <img src="/images/lawyer1.jpg" alt="Lawyer" className="card-image" />
            <div className="card-details">
                <h3>Lawyer Name</h3>
                <p>Lawyer Bio</p>
                <p>Lawyer Rating</p>
                <button>Contact</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/lawyer1.jpg" alt="Lawyer" className="card-image" />
            <div className="card-details">
                <h3>Lawyer Name</h3>
                <p>Lawyer Bio</p>
                <p>Lawyer Rating</p>
                <button>Contact</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/lawyer1.jpg" alt="Lawyer" className="card-image" />
            <div className="card-details">
                <h3>Lawyer Name</h3>
                <p>Lawyer Bio</p>
                <p>Lawyer Rating</p>
                <button>Contact</button>
            </div>
        </div>
        <div className="card">
            <img src="/images/lawyer1.jpg" alt="Lawyer" className="card-image" />
            <div className="card-details">
                <h3>Lawyer Name</h3>
                <p>Lawyer Bio</p>
                <p>Lawyer Rating</p>
                <button>Contact</button>
            </div>
        </div>
    </div>
  );
};

export default Lawyers;
