import React from 'react';
import './InfoCard.css'; // Create a separate CSS file for styling

const Info = ({ imageLink, title, description, price, redirectUrl }) => {
    return (
        <div className='info-cards'>
            <a href={redirectUrl} target="_self" rel="noopener noreferrer" className="info-card">
                <div className="info-card-image">
                    <img src={imageLink} alt={title} />
                </div>
                <div className="info-card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='pricing'>
                    <span>Starting at ₹{price}</span>
                </div>
            </a>
        </div>
    );
};

export default Info;
