import React from 'react';

const Header = () => {
    return (
        <header className="p-6 bg-blue-600 flex justify-between items-center">
            <h1 className="text-4xl font-sans font-bold text-white">
                SmartSwap
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">Home</a></li>
                    <li><a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">About</a></li>
                    <li><a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;