import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AnalysisSection from './components/AnalysisSection';
import StatsBar from './components/StatsBar';
import ImageUpload from './components/ImageUpload';
import ImageCarousel from './components/ImageCarousel';
import ProgressCharts from './components/ProgressCharts';
import OpenAI, { stream } from 'openai';

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Ensure this is set in your .env file
});

// App Component
function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [calories, setCalories] = useState(null);
    const [protein, setProtein] = useState(null);
    const [carbs, setCarbs] = useState(null);
    const [fat, setFat] = useState(null);
    const [swapSuggestions, setSwapSuggestions] = useState([]);
    const [carouselData, setCarouselData] = useState([]);
    const [loading, setLoading] = useState(false);

    const caloriesSavedData = [
        { date: '2024-09-25', caloriesSaved: 150 },
        { date: '2024-09-26', caloriesSaved: 200 },
        { date: '2024-09-27', caloriesSaved: 50 },
        { date: '2024-09-28', caloriesSaved: 180 },
        { date: '2024-09-29', caloriesSaved: 120 },
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

            setLoading(true);

            reader.onload = async (e) => {
                if (e.target && e.target.result) {
                    const base64Image = e.target.result.split(',')[1]; // Extract the base64 part without the data URL prefix

                    console.log(
                        'Image read as base64:',
                        base64Image.substring(0, 50) + '...'
                    );

                    try {
                        const response = await openai.chat.completions.create({
                            model: 'gpt-4o-mini',
                            messages: [
                                {
                                    role: 'system',
                                    content: `You are a helpful AI assistant that can analyze food images, provide structured nutritional information, and suggest healthier recipes with AI-generated images.

For recipe suggestions, generate image links using the following format:

https://image.pollinations.ai/prompt/{description}?width=512&height=512&nologo=true&seed={random_number}

Where:
- \`{description}\` is a URL-encoded description of the recipe image.
- \`{random_number}\` is a randomly generated number for the seed parameter.

For example:

https://image.pollinations.ai/prompt/healthy%20chicken%20stir-fry%20with%20brown%20rice%20close-up%20shot?width=512&height=512&nologo=true&seed=12345

Provide 6 recipe suggestions with images, titles, and descriptions.`,
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
                                                    type: 'object',
                                                    properties: {
                                                        name: {
                                                            type: 'string',
                                                        },
                                                        image_url: {
                                                            type: 'string', // This will hold the image_url for the identified food item
                                                        },
                                                    },
                                                    required: [
                                                        'name',
                                                        'image_url',
                                                    ],
                                                    additionalProperties: false,
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
                                            recipe_images: {
                                                // New field for recipe images
                                                type: 'array',
                                                items: {
                                                    type: 'object',
                                                    properties: {
                                                        title: {
                                                            type: 'string',
                                                        },
                                                        description: {
                                                            type: 'string',
                                                        },
                                                        image_url: {
                                                            type: 'string',
                                                        },
                                                    },
                                                    required: [
                                                        'title',
                                                        'description',
                                                        'image_url',
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
                                            'recipe_images',
                                        ],
                                        additionalProperties: false,
                                    },
                                },
                            },
                            max_tokens: 4096,
                        });

                        console.log(
                            'OpenAI API response received:',
                            response.choices[0].message.content
                        );

                        const analysisResults = JSON.parse(
                            response.choices[0].message.content
                        );
                        if (analysisResults) {
                            console.log(
                                'Analysis results parsed:',
                                analysisResults
                            );
                            setCalories(analysisResults.estimated_calories);
                            setProtein(analysisResults.macros.protein);
                            setCarbs(analysisResults.macros.carbohydrates);
                            setFat(analysisResults.macros.fat);
                            setSwapSuggestions(
                                analysisResults.swap_suggestions
                            );
                            setCarouselData(analysisResults.recipe_images);
                        } else {
                            console.error(
                                'Unexpected response format from OpenAI API:',
                                response
                            );
                        }
                    } catch (error) {
                        console.error('Error analyzing image:', error);
                    } finally {
                        setLoading(false);
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
                <h2 className="text-5xl font-sans font-bold mb-12 text-center text-purple-500">
                    Turn your meals into healthier realities
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                    <AnalysisSection
                        calories={calories}
                        protein={protein}
                        carbs={carbs}
                        fat={fat}
                        swapSuggestions={swapSuggestions}
                        loading={loading}
                    />
                </div>

                <ImageCarousel carouselData={carouselData} />

                <ProgressCharts
                    caloriesSavedData={caloriesSavedData}
                    macroBreakdownData={macroBreakdownData}
                    colors={['#8B5CF6', '#10B981', '#F59E0B']} // Updated colors
                />
            </main>
        </div>
    );
}

export default App;
