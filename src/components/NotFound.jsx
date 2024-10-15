import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

// NotFound component to display a 404 error message when a page is not found
const NotFound = () => {
    return (
        <div className="notfound_container">
            <div className="notfound_content">
                {/* Display the 404 error code */}
                <h1>404</h1>
                {/* Display a message indicating the page is not found */}
                <h2>Oops! Page Not Found</h2>
                {/* Inform the user that the requested page cannot be found */}
                <p>We can't seem to find the page you're looking for.</p>
                {/* Link to redirect the user back to the home page */}
                <Link to="/" className="home_button">Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
