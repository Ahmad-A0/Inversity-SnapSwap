import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import { fileTypeFromBuffer } from 'file-type';
import fs from 'fs';
import OpenAI from 'openai'; // Import the OpenAI package

dotenv.config();

const app = express();
const port = 4000;

const upload = multer({
    dest: './uploads/',
    limits: { fileSize: 10 * 1024 * 1024 },
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
