import React from 'react';

const Header = () => {
    return (
        <header className="p-6 bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-5xl -mb-2 font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    SnapSwap
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">About</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;