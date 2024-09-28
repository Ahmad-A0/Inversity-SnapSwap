import React from 'react';                                                         
import { motion } from 'framer-motion';                                            
                                                                                   

const ImageUpload = ({ selectedImage, handleImageChange }) => {                    
    const handleButtonClick = () => {                                              
        document.getElementById('imageInput').click();                             
    };                                                                             

                                                                                   
    return (                                                                       
        <div className="relative bg-gray-800 p-4 pb-0 rounded-xl shadow-lg         
overflow-hidden h-[40rem]" role="region" aria-label="Image Upload Section">                                                        
            {selectedImage ? (                                                     
                <div className="relative w-full h-full">
                    <img                                                               
                        src={selectedImage}                                            
                        alt="Uploaded meal"                                                     
                        className="w-full h-full object-cover rounded-lg"              
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <input                                                         
                            type="file"                                                
                            accept="image/*"                                           
                            onChange={handleImageChange}                               
                            className="hidden"                                         
                            id="imageInput"                                            
                            aria-label="Upload another image"
                        />                                                             
                        <label htmlFor="imageInput" className="cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                                onClick={handleButtonClick}
                                aria-label="Upload Another Image"
                            >
                                Upload Another Image
                            </motion.button>
                        </label>
                    </div>
                </div>
            ) : (                                                                  
                <div className="absolute inset-0 flex items-center justify-center  
bg-gray-700">                                                                      
                    <input                                                         
                        type="file"                                                
                        accept="image/*"                                           
                        onChange={handleImageChange}                               
                        className="hidden"                                         
                        id="imageInput"                                            
                        aria-label="Upload image"
                    />                                                             
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                    >
                        <label htmlFor="imageInput" className="cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
                                onClick={handleButtonClick}
                                aria-label="Upload Image"
                            >
                                Upload Image
                            </motion.button>
                        </label>
                    </motion.div>
                </div>                                                             
            )}                                                                     
        </div>                                                                     
    );                                                                             
};                                                                                 
export default ImageUpload;   
