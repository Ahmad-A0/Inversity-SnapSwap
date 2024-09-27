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
import placeholderImage from "./images/placeholder.png";
import Masonry from 'react-masonry-css';

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

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
            // ... your image analysis logic to update calories, protein, etc. ...
        }
    };

    return (
        <div className="min-h-screen font-sans text-gray-100 bg-gray-900">
            <header className="p-6 bg-gray-800">
                <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                    SmartSwap
                </h1>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-5xl font-serif mb-12 text-center">
                    Turn your meals into healthier realities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-1 bg-gray-800 p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-serif mb-4 text-yellow-300">
                            Analysis & Suggestions
                        </h3>
                        <p className="text-xl mb-2">Estimated Calories: 550</p>
                        <p className="text-xl mb-2">Macronutrients:</p>
                        <ul className="list-disc pl-5 text-lg mb-4 text-gray-300">
                            <li>Protein: 30g</li>
                            <li>Carbohydrates: 60g</li>
                            <li>Fat: 25g</li>
                        </ul>
                        <h4 className="text-xl font-serif mt-6 mb-2 text-yellow-300">
                            Suggestions:
                        </h4>
                        <ul className="list-disc pl-5 text-lg mb-6 text-gray-300">
                            <li>
                                Swap white rice for brown rice for added fiber
                                and nutrients.
                            </li>
                            <li>
                                Consider a smaller portion of the fried chicken
                                for reduced fat intake.
                            </li>
                            <li>
                                Add a side of steamed vegetables for extra
                                vitamins.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-2"
                    >
                        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-4 flex justify-between text-gray-300">
                            <div>
                                <span className="font-bold">Calories:</span>{' '}
                                {calories || 'N/A'}
                            </div>
                            <div>
                                <span className="font-bold">Protein:</span>{' '}
                                {protein || 'N/A'}g
                            </div>
                            <div>
                                <span className="font-bold">Carbs:</span>{' '}
                                {carbs || 'N/A'}g
                            </div>
                            <div>
                                <span className="font-bold">Fat:</span>{' '}
                                {fat || 'N/A'}g
                            </div>
                        </div>
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
                                    <label
                                        htmlFor="imageInput"
                                        className="cursor-pointer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                                        >
                                            Upload Image
                                        </motion.button>
                                    </label>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Image Carousel Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12"
                >
                    <div className="ImageGrid">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
                                style={{ width: `${Math.random() * 100 + 150}px`, height: `${Math.random() * 100 + 150}px` }}
                            >
                                <img
                                    src={placeholderImage}
                                    alt={`Placeholder ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

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
                                        {macroBreakdownData.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            )
                                        )}
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
                </motion.div>

            </main>
        </div>
    );
}

export default App;
