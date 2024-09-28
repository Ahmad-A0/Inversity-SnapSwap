import React from 'react';                                                         
                                                                                    
const StatsBar = ({ calories, protein, carbs, fat }) => {                          
    return (                                                                       
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-4 flex             
justify-between text-gray-300" role="region" aria-label="Nutrition Statistics">                                                    
            <div>                                                                  
                <span className="font-bold">Calories:</span> <span aria-label="Calories">{calories || 'N/A'}</span>   
            </div>                                                                 
            <div>                                                                  
                <span className="font-bold">Protein:</span> <span aria-label="Protein">{protein || 'N/A'}g</span>    
            </div>                                                                 
            <div>                                                                  
                <span className="font-bold">Carbs:</span> <span aria-label="Carbohydrates">{carbs || 'N/A'}g</span>        
            </div>                                                                 
            <div>                                                                  
                <span className="font-bold">Fat:</span> <span aria-label="Fat">{fat || 'N/A'}g</span>            
            </div>                                                                 
        </div>                                                                     
    );                                                                             
};                                                                                 
                                                                                   
export default StatsBar;  
