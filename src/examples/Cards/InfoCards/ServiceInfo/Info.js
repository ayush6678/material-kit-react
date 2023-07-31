import React from 'react';
import './InfoCard.css'; // Create a separate CSS file for styling

const Info = ({ imageLink, title, description, price, redirectUrl }) => {
    return (
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-card-image">
                <img src={imageLink} alt={title} />
            </div>
            <div className="info-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <span>Starting at ₹{price}</span>
            </div>
        </a>
    );
};

export default Info;
