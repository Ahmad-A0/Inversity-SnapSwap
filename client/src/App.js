import React, { useState } from 'react';
import placeholderImage from './images/placeholder.png'; // Replace with your placeholder image

function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.files[0]));
        }
    };

    return (
        <div className="bg-nestadarkblue min-h-screen font-sans">
            <header className="bg-nestadarkblue text-white p-4 text-center">
                <h1 className="text-6xl font-bold mb-4">
                    FoodSwap
                </h1>
                <p className="text-lg">
                    Upload a picture of your food to get started.
                </p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="imageInput"
                />
                <label htmlFor="imageInput">
                    <button className="mt-6 bg-white text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200">
                        Upload Image
                    </button>
                </label>
            </header>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-grow">
                    {(selectedImage || true) && (
                        <div className="flex flex-row flex-grow">
                            <div className="flex flex-col justify-between bg-white bg-opacity-75 p-4 rounded-lg shadow-md w-1/3">
                                <h2 className="text-2xl font-bold mb-2">
                                    Analysis & Suggestions
                                </h2>
                                {/* Dummy analysis and suggestions */}
                                <p>Estimated Calories: 550</p>
                                <p>Macronutrients:</p>
                                <ul className="list-disc pl-5">
                                    <li>Protein: 30g</li>
                                    <li>Carbohydrates: 60g</li>
                                    <li>Fat: 25g</li>
                                </ul>
                                <h3 className="text-xl font-bold mt-4">
                                    Suggestions:
                                </h3>
                                <ul className="list-disc pl-5">
                                    <li>
                                        Swap white rice for brown rice for added
                                        fiber and nutrients.
                                    </li>
                                    <li>
                                        Consider a smaller portion of the fried
                                        chicken for reduced fat intake.
                                    </li>
                                    <li>
                                        Add a side of steamed vegetables for extra
                                        vitamins.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-grow relative">
                                <img src={placeholderImage} className="max-h-screen max-w-screen rounded-lg"></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
