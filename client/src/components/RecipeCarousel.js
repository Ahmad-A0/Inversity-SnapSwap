import React from 'react';
import { motion } from 'framer-motion';

const RecipeCarousel = () => {
    // Mock data for recipes
    const recipes = [
        { id: 1, title: 'Healthy Smoothie Bowl', image: '/api/placeholder/200/150' },
        { id: 2, title: 'Grilled Chicken Salad', image: '/api/placeholder/200/150' },
        { id: 3, title: 'Veggie Stir Fry', image: '/api/placeholder/200/150' },
        { id: 4, title: 'Quinoa Buddha Bowl', image: '/api/placeholder/200/150' },
    ];

    return (
        <div className="mt-12 mb-8">
            <h3 className="text-3xl font-sans font-bold mb-6 text-center text-purple-500">
                Healthy Recipe Suggestions
            </h3>
            <div className="flex overflow-x-auto gap-6 pb-4">
                {recipes.map((recipe) => (
                    <motion.div
                        key={recipe.id}
                        className="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold text-yellow-400">{recipe.title}</h4>
                            <button className="mt-2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-600 transition-colors duration-200">
                                View Recipe
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecipeCarousel;