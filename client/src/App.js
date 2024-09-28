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
import OpenAI from 'openai';

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,  
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Ensure this is set in your .env file
});

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
const AnalysisSection = ({ calories, protein, carbs, fat, swapSuggestions }) => {
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
            {swapSuggestions && swapSuggestions.length > 0 && (
                <>
                    <h4 className="text-xl font-serif mt-6 mb-2 text-yellow-300">
                        Suggestions:
                    </h4>
                    <ul className="list-disc pl-5 text-lg mb-6 text-gray-300">
                        {swapSuggestions.map((suggestion, index) => (
                            <li key={index}>
                                Swap {suggestion.original_item} for {suggestion.suggested_swap} - {suggestion.reason}
                            </li>
                        ))}
                    </ul>
                </>
            )}
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
    const [swapSuggestions, setSwapSuggestions] = useState([]);

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
            const reader = new FileReader();

            console.log('Image upload started:', file.name);

            reader.onload = async (e) => {
                if (e.target && e.target.result) {
                    const base64Image = e.target.result.split(',')[1]; // Extract the base64 part without the data URL prefix

                    console.log('Image read as base64:', base64Image.substring(0, 50) + '...');

                    try {
                        const response = await openai.chat.completions.create({
                            model: 'gpt-4o-mini',
                            messages: [
                                {
                                    role: 'system',
                                    content:
                                        'You are a helpful AI assistant that can analyze food images and provide structured nutritional information.',
                                },
                                {
                                    role: 'user',
                                    content: [
                                        {
                                            type: 'text',
                                            text: 'Analyze this meal and tell me what is in it, estimate the calories and macros, and suggest healthier swaps if possible.',
                                        },
                                        {
                                            type: 'image_url',
                                            image_url: {
                                                url: `data:image/jpeg;base64,${base64Image}`,
                                            },
                                        },
                                    ],
                                },
                            ],
                            response_format: {
                                type: 'json_schema',
                                json_schema: {
                                    name: 'meal_analysis',
                                    strict: true,
                                    schema: {
                                        type: 'object',
                                        properties: {
                                            food_items: {
                                                type: 'array',
                                                items: {
                                                    type: 'string',
                                                },
                                            },
                                            estimated_calories: {
                                                type: 'integer',
                                            },
                                            macros: {
                                                type: 'object',
                                                properties: {
                                                    protein: {
                                                        type: 'integer',
                                                    },
                                                    carbohydrates: {
                                                        type: 'integer',
                                                    },
                                                    fat: {
                                                        type: 'integer',
                                                    },
                                                },
                                                required: [
                                                    'protein',
                                                    'carbohydrates',
                                                    'fat',
                                                ],
                                                additionalProperties: false,
                                            },
                                            swap_suggestions: {
                                                type: 'array',
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        original_item: {
                                                            type: 'string',
                                                        },
                                                        suggested_swap: {
                                                            type: 'string',
                                                        },
                                                        reason: {
                                                            type: 'string',
                                                        },
                                                    },
                                                    required: [
                                                        'original_item',
                                                        'suggested_swap',
                                                        'reason',
                                                    ],
                                                    additionalProperties: false,
                                                },
                                            },
                                        },
                                        required: [
                                            'food_items',
                                            'estimated_calories',
                                            'macros',
                                            'swap_suggestions',
                                        ],
                                        additionalProperties: false,
                                    },
                                },
                            },
                            max_tokens: 500,
                        });

                        console.log('OpenAI API response received:', response.choices[0].message.content.substring(0, 50) + '...');

                        const analysisResults = JSON.parse(response.choices[0].message.content);
                        if (analysisResults) {
                            console.log('Analysis results parsed:', analysisResults);
                            setCalories(analysisResults.estimated_calories);
                            setProtein(analysisResults.macros.protein);
                            setCarbs(analysisResults.macros.carbohydrates);
                            setFat(analysisResults.macros.fat);
                            setSwapSuggestions(analysisResults.swap_suggestions);
                        } else {
                            console.error('Unexpected response format from OpenAI API:', response);
                        }
                    } catch (error) {
                        console.error('Error analyzing image:', error);
                    }
                }
            };

            reader.readAsDataURL(file);
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
                        swapSuggestions={swapSuggestions}
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
