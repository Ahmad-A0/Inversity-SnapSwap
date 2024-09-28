import React from 'react';
import { motion } from 'framer-motion';

const AnalysisSection = ({
    calories,
    protein,
    carbs,
    fat,
    swapSuggestions,
    loading,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation state when rendered
            transition={{ duration: 0.5 }} // Duration of the animation
            className="col-span-1 bg-gray-800 p-6 rounded-xl shadow-lg" // Styling
        >
            <h3 className="text-2xl font-serif mb-4 text-yellow-300">
                Analysis & Suggestions
            </h3>
            {loading ? (
                <div className="animate-pulse"> // Loading state
                    {Array.from({ length: 9 }, (_, index) => (
                        <div
                            key={index}
                            className="h-4 bg-gray-700 rounded mb-2"
                        ></div>
                    ))}
                </div>
            ) : (
                <>
                    <p className="text-xl mb-2">
                        Estimated Calories: {calories}
                    </p>
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
                                        Swap <b>{suggestion.original_item}</b> for <u><b>{suggestion.suggested_swap}</b></u> - {suggestion.reason}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </motion.div>
    );
};

export default AnalysisSection;
