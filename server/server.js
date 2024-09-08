import express from 'express';
import multer from 'multer';
import axios from 'axios';
import dotenv from 'dotenv';
import fileType from 'file-type';

dotenv.config();

const app = express();
const port = 3000;

const upload = multer({
  dest: './uploads/', // upload directory
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB file size limit
});

const chatGPTApiUrl = 'https://api.openai.com/v1/images/generate';
const chatGPTApiKey = process.env.CHATGPT_API_KEY;

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file;

    // Validate that the uploaded file is an image
    const fileTypeResult = await fileType.fromBuffer(imageFile.buffer);
    if (!fileTypeResult || !['image/jpeg', 'image/png', 'image/gif'].includes(fileTypeResult.mime)) {
      return res.status(400).json({ error: 'Invalid file type. Only image files are allowed.' });
    }

    const response = await axios.post(chatGPTApiUrl, {
      image: imageFile.buffer,
      model: 'image-classification',
    }, {
      headers: {
        'Authorization': `Bearer ${chatGPTApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const analysisResults = response.data;

    res.json(analysisResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
