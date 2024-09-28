import React from 'react';                                                         
                                                                                    
const StatsBar = ({ calories, protein, carbs, fat }) => {                          
    return (                                                                       
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-4 flex             
justify-between text-gray-300">                                                    
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
                                                                                   
export default StatsBar;  