import React from 'react';
import { motion } from 'framer-motion';

const AnalysisSection = ({
    calories,
    protein,
    carbs,
    fat,
    swapSuggestions,
    loading,
    analysisText,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden"
            role="region"
            aria-label="Analysis and Suggestions"
        >
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 transform rotate-45 translate-x-10 -translate-y-10" aria-hidden="true"></div>
            <h3 className="text-2xl font-sans font-bold mb-4 text-yellow-400" role="heading" aria-level="3">
                Analysis & Suggestions
            </h3>
            {loading ? (
                <div className="animate-pulse space-y-2" aria-label="Loading analysis">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div
                            key={index}
                            className="h-4 bg-gray-700 rounded"
                            aria-hidden="true"
                        ></div>
                    ))}
                </div>
            ) : (
                <>
                    <p className="text-xl mb-2" role="status">
                        Estimated Calories: <span className="font-bold text-purple-400">{calories}</span>
                    </p>
                    <p className="text-xl mb-2" role="heading" aria-level="4">
                        Macronutrients:
                    </p>
                    <ul className="list-disc pl-5 text-lg mb-4 text-gray-300" aria-label="Macronutrients breakdown">
                        <li role="listitem">Protein: <span className="font-bold text-green-400">{protein}g</span></li>
                        <li role="listitem">Carbohydrates: <span className="font-bold text-blue-400">{carbs}g</span></li>
                        <li role="listitem">Fat: <span className="font-bold text-yellow-400">{fat}g</span></li>
                    </ul>
                    {swapSuggestions && swapSuggestions.length > 0 && (
                        <>
                            <h4 className="text-xl font-sans font-bold mt-6 mb-2 text-yellow-400" role="heading" aria-level="4">
                                Suggestions:
                            </h4>
                            <div className="space-y-4">
                                {swapSuggestions.map((suggestion, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-700 p-4 rounded-lg shadow-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        role="article"
                                        aria-label={`Swap suggestion ${index + 1}`}
                                    >
                                        <p role="text">
                                            Swap <span className="font-bold">{suggestion.original_item}</span> for{' '}
                                            <span className="font-bold underline">{suggestion.suggested_swap}</span>
                                            {' '}- {suggestion.reason}
                                        </p>
                                        <div className="mt-2 flex space-x-2">
                                            <button 
                                                className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors duration-200"
                                                aria-label={`Like swap suggestion for ${suggestion.original_item}`}
                                            >
                                                Like
                                            </button>
                                            <button 
                                                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                                                aria-label={`Dislike swap suggestion for ${suggestion.original_item}`}
                                            >
                                                Dislike
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                    {analysisText && (
                        <div className="text-lg mb-4 text-gray-300" aria-label="Additional analysis">
                            {analysisText}
                        </div>
                    )}
                </>
            )}
        </motion.div>
    );
};

export default AnalysisSection;
