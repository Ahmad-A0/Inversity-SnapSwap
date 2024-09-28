import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';
import placeholderImage from './images/placeholder.png';
import HeatmapComponent from './components/Heatmap';

// Header Component
const Header = () => {
    return (
        <header className="p-6 bg-gray-800">
            <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                SmartSwap
            </h1>
        </header>
    );
};

// Analysis Section Component
const AnalysisSection = ({ calories, protein, carbs, fat }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 bg-gray-800 p-6 rounded-xl shadow-lg"
        >
            <h3 className="text-2xl font-serif mb-4 text-yellow-300">
                Analysis & Suggestions
            </h3>
            <p className="text-xl mb-2">Estimated Calories: {calories}</p>
            <p className="text-xl mb-2">Macronutrients:</p>
            <ul className="list-disc pl-5 text-lg mb-4 text-gray-300">
                <li>Protein: {protein}g</li>
                <li>Carbohydrates: {carbs}g</li>
                <li>Fat: {fat}g</li>
            </ul>
            <h4 className="text-xl font-serif mt-6 mb-2 text-yellow-300">
                Suggestions:
            </h4>
            <ul className="list-disc pl-5 text-lg mb-6 text-gray-300">
                <li>
                    Swap white rice for brown rice for added fiber and
                    nutrients.
                </li>
                <li>
                    Consider a smaller portion of the fried chicken for reduced
                    fat intake.
                </li>
                <li>Add a side of steamed vegetables for extra vitamins.</li>
            </ul>
        </motion.div>
    );
};

// Stats Bar Component
const StatsBar = ({ calories, protein, carbs, fat }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-4 flex justify-between text-gray-300">
            <div>
                <span className="font-bold">Calories:</span> {calories || 'N/A'}
            </div>
            <div>
                <span className="font-bold">Protein:</span> {protein || 'N/A'}g
            </div>
            <div>
                <span className="font-bold">Carbs:</span> {carbs || 'N/A'}g
            </div>
            <div>
                <span className="font-bold">Fat:</span> {fat || 'N/A'}g
            </div>
        </div>
    );
};

// Image Upload Component
const ImageUpload = ({ selectedImage, handleImageChange }) => {
    const handleButtonClick = () => {
        document.getElementById('imageInput').click();
    };

    return (
        <div className="relative bg-gray-800 p-4 rounded-xl shadow-lg overflow-hidden h-80">
            {selectedImage ? (
                <img
                    src={selectedImage}
                    alt="Meal"
                    className="w-full h-full object-cover rounded-lg"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="imageInput"
                    />
                    <label htmlFor="imageInput" className="cursor-pointer">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                            onClick={handleButtonClick}
                        >
                            Upload Image
                        </motion.button>
                    </label>
                </div>
            )}
        </div>
    );
};

// Image Carousel Component
const ImageCarousel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
        >
            <div className="flex overflow-x-auto gap-8">
                {[1, 2, 3, 4, 5, 6].map((i, index) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-64 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-md 
relative group"
                    >
                        <img
                            src={placeholderImage}
                            alt={`Placeholder ${i}`}
                            className="w-full h-full object-contain transition-transform 
duration-300 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-75 text-white p-4
hidden group-hover:block"
                        >
                            <h4 className="text-lg font-serif mb-2">
                                Recipe Title
                            </h4>
                            <p className="text-sm">Description of the recipe</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Progress Charts Component
const ProgressCharts = ({ caloriesSavedData, macroBreakdownData, colors }) => {
    const swapData = [
        { date: '2023-10-25', swaps: 15 },
        { date: '2023-10-26', swaps: 20 },
        { date: '2023-10-27', swaps: 5 },
        { date: '2023-10-28', swaps: 18 },
        { date: '2023-10-29', swaps: 12 },
        // Add more data as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
        >
            <h3 className="text-3xl font-serif text-center mb-8 text-yellow-300">
                Your Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-yellow-300 mb-4">
                        Calories Saved
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={caloriesSavedData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#555"
                            />
                            <XAxis dataKey="date" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#333',
                                    border: 'none',
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="caloriesSaved"
                                stroke="#FFD700"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-yellow-300 mb-4">
                        Macronutrient Breakdown
                    </h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={macroBreakdownData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {macroBreakdownData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors[index % colors.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#333',
                                    border: 'none',
                                }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-gray-800 p-6 my-10 rounded-xl shadow-lg">
                <ResponsiveContainer width="100%" height="50%">
                    <HeatmapComponent data={swapData} />
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

// App Component
function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [fat, setFat] = useState(null);

    const caloriesSavedData = [
        { date: '2023-10-25', caloriesSaved: 150 },
        { date: '2023-10-26', caloriesSaved: 200 },
        { date: '2023-10-27', caloriesSaved: 50 },
        { date: '2023-10-28', caloriesSaved: 180 },
        { date: '2023-10-29', caloriesSaved: 120 },
    ];

    const macroBreakdownData = [
        { name: 'Protein', value: 30 },
        { name: 'Carbs', value: 60 },
        { name: 'Fat', value: 25 },
    ];

    const COLORS = ['#FFD700', '#B8860B', '#DAA520'];

    const handleImageChange = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('http://localhost:4000/analyze', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setCalories(data.estimated_calories);
                    setProtein(data.macros.protein);
                    setCarbs(data.macros.carbohydrates);
                    setFat(data.macros.fat);
                } else {
                    console.error('Failed to analyze image:', response.statusText);
                }
            } catch (error) {
                console.error('Error analyzing image:', error);
            }

            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen font-sans text-gray-100 bg-gray-900">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-5xl font-serif mb-12 text-center">
                    Turn your meals into healthier realities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnalysisSection
                        calories={calories}
                        protein={protein}
                        carbs={carbs}
                        fat={fat}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-2"
                    >
                        <StatsBar
                            calories={calories}
                            protein={protein}
                            carbs={carbs}
                            fat={fat}
                        />
                        <ImageUpload
                            selectedImage={selectedImage}
                            handleImageChange={handleImageChange}
                        />
                    </motion.div>
                </div>

                <ImageCarousel />

                <ProgressCharts
                    caloriesSavedData={caloriesSavedData}
                    macroBreakdownData={macroBreakdownData}
                    colors={COLORS}
                />
            </main>
        </div>
    );
}
export default App;
