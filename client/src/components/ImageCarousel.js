import React from 'react';
import { motion } from 'framer-motion';
import placeholderImage from '../images/placeholder.png';

const ImageCarousel = ({ carouselData }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
            role="region"
            aria-label="Image Carousel"
        >
            <div className="flex overflow-x-auto gap-8 cursor-pointer" role="list">
                {carouselData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-64 h-48 bg-blue-500 rounded-lg overflow-hidden shadow-md relative group"
                        role="listitem"
                        aria-label={item.title}
                    >
                        <div className="relative w-full h-full pt-2">
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 transform -translate-x-2 -translate-y-2  rounded-lg"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 hidden group-hover:block"
                                aria-hidden="true"
                            >
                                <h4 className="text-lg font-serif mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ImageCarousel;
