import React from 'react';
import { motion } from 'framer-motion';
import placeholderImage from '../images/placeholder.png';

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
                        className="w-64 h-48 bg-gray-800 rounded-lg overflow-hidde 
 shadow-md                                                                          
 relative group"
                    >
                        <img
                            src={placeholderImage}
                            alt={`Placeholder ${i}`}
                            className="w-full h-full object-contain                
 transition-transform                                                               
 duration-300 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-75     
 text-white p-4                                                                     
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

export default ImageCarousel;
