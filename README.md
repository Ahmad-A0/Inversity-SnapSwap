# SmartSwap - Your Nutrition Companion

## Overview

SmartSwap is a web application designed to help users analyze their meals, estimate nutritional values, and suggest healthier alternatives. The app leverages AI to provide detailed insights and recommendations based on uploaded images of meals.

## Features

- **Image Upload**: Users can upload images of their meals.
- **Nutritional Analysis**: The app estimates the calories and macronutrients (protein, carbs, fat) of the uploaded meal.
- **Recipe Suggestions**: AI-generated suggestions for healthier meal swaps.
- **Progress Tracking**: Visual charts to track calories saved and macronutrient breakdown over time.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Framer Motion
- **AI**: OpenAI for image analysis and recipe suggestions
- **Charts**: Recharts for data visualization
- **Progressive Web App (PWA)**: Service workers for offline support and app-like experience

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/smartswap.git
   cd smartswap
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API keys:
   ```sh
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   REACT_APP_GROQ_API_KEY=your_groq_api_key
   ```

### Running the App

1. **Start the development server:**
   ```sh
   npm start
   ```

2. **Open the app in your browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Building for Production

1. **Build the app for production:**
   ```sh
   npm run build
   ```

2. **The build folder is ready to be deployed.**
   - The build is minified and the filenames include the hashes.
   - Your app is ready to be deployed!

### Running Tests

1. **Run the test suite:**
   ```sh
   npm test
   ```

### Deployment

1. **Deploy the app to a hosting service:**
   - You can use services like Vercel, Netlify, or GitHub Pages to deploy your app.

## Contributing

1. **Fork the repository:**
   - Click the "Fork" button on the top right of the repository page.

2. **Clone your fork:**
   ```sh
   git clone https://github.com/your-username/smartswap.git
   cd smartswap
   ```

3. **Create a new branch:**
   ```sh
   git checkout -b feature/your-feature
   ```

4. **Make your changes:**
   - Commit your changes and push to your fork.

5. **Create a pull request:**
   - Go to the original repository and click "New pull request" to submit your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Recharts](https://recharts.org/)
- [OpenAI](https://openai.com/)
- [React Calendar Heatmap](https://github.com/gene1wood/react-calendar-heatmap)

---

Thank you for using SmartSwap! We hope it helps you make healthier choices and achieve your nutrition goals.
