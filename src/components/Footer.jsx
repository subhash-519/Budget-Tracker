import React from 'react';

const Footer = ({ darkMode }) => {
    return (
        <div className={`mt-8 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>Built with React & Tailwind CSS • Track your finances with ease</p>
        </div>
    );
};

export default Footer;
