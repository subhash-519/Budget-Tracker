import React from 'react';
import { Wallet, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <Wallet className={`w-8 h-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Budget Tracker
                </h1>
            </div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full transition-all duration-300 ${darkMode
                        ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    } shadow-lg`}
            >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
        </div>
    );
};

export default Header;
