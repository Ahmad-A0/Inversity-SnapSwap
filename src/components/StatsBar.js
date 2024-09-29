import React from 'react';                                                         
                                                                                    
const StatsBar = ({ calories, protein, carbs, fat }) => {                          
    return (                                                                       
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-4 flex justify-between text-gray-300" role="region" aria-label="Nutrition Statistics">
            <div role="presentation">
                <span className="font-bold" aria-label="Calories Label">Calories:</span> <span aria-label="Calories Value">{calories || 'N/A'}</span>   
            </div>                                                                 
            <div role="presentation">
                <span className="font-bold" aria-label="Protein Label">Protein:</span> <span aria-label="Protein Value">{protein || 'N/A'}g</span>    
            </div>                                                                 
            <div role="presentation">
                <span className="font-bold" aria-label="Carbs Label">Carbs:</span> <span aria-label="Carbs Value">{carbs || 'N/A'}g</span>        
            </div>                                                                 
            <div role="presentation">
                <span className="font-bold" aria-label="Fat Label">Fat:</span> <span aria-label="Fat Value">{fat || 'N/A'}g</span>            
            </div>                                                                 
        </div>                                                                     
    );                                                                             
};                                                                                 
                                                                                   
export default StatsBar;  
