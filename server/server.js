import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import fileType from 'file-type';
import fs from 'fs';
import OpenAI from 'openai'; // Import the OpenAI package

dotenv.config();

const app = express();
const port = 3000;

const upload = multer({
    dest: './uploads/',
    limits: { fileSize: 10 * 1024 * 1024 },
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/analyze', upload.single('image'), async (req, res) => {
    try {
        const imageFile = req.file;

        // Validate file type
        const fileTypeResult = await fileType.fromBuffer(imageFile.buffer);
        if (
            !fileTypeResult ||
            !['image/jpeg', 'image/png'].includes(fileTypeResult.mime)
        ) {
            return res
                .status(400)
                .json({
                    error: 'Invalid file type. Only JPEG and PNG images are allowed.',
                });
        }

        // Encode image to Base64
        const base64Image = imageFile.buffer.toString('base64');

        // Create the chat completion request
        const response = await openai.chat.completions.create({
            model: 'gpt-4-vision-preview',
            messages: [
                {
                    role: 'system',
                    content:
                        'You are a helpful AI assistant that can analyze food images and provide structured nutritional information.',
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
                    // Include the meal_analysis schema here
                    name: 'meal_analysis',
                    strict: true,
                    schema: {
                        type: 'object',
                        properties: {
                            food_items: {
                                type: 'array',
                                items: {
                                    type: 'string',
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
                                required: ['protein', 'carbohydrates', 'fat'],
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
                        },
                        required: [
                            'food_items',
                            'estimated_calories',
                            'macros',
                            'swap_suggestions',
                        ],
                        additionalProperties: false,
                    },
                },
            },
            max_tokens: 500,
        });

        const analysisResults = response.data; // Access structured data directly

        // Delete the uploaded image after analysis (optional)
        fs.unlinkSync(imageFile.path);

        res.json(analysisResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to analyze image.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
