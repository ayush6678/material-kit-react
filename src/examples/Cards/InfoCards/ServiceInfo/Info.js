import React from 'react';
import './InfoCard.css'; // Create a separate CSS file for styling
import { Link } from 'react-router-dom';
import MKTypography from 'components/MKTypography';
const Info = ({ imageLink, title, description, price, redirectUrl }) => {
    return (
        <div className='info-cards'>
            <Link to={redirectUrl} target="_self" rel="noopener noreferrer" className="info-card">
                <div className="info-card-image">
                    <img src={imageLink} alt={title} />
                </div>
                <div className="info-card-content">
                <MKTypography variant="h2" >{title}</MKTypography>
                    <p>{description}</p>
                </div>
                <div className='pricing'>
                    <span>Starting at ₹{price}</span>
                </div>
            </Link>
        </div>
    );
};

export default Info;
