# TeamName: Finers
# FS013

## Team Members ( contributers ): 
### Nripesh Bhusal
### Shahan Ayyubi
### Aamir Hashmi

Repo link: https://front-end-gamma-ten.vercel.app/

Finers - AI-Powered Financial Advisory Platform

📌 Overview
Finers is an AI-driven financial advisory platform designed to help young investors and newcomers make informed investment decisions. It provides personalized portfolio recommendations and educational insights through an AI chatbot that continuously learns from user interactions.

🚀 Features
AI Chatbot: Offers tailored investment advice based on user inputs.
Portfolio Recommendation: Uses Yahoo Finance API and Machine Learning to suggest optimal investment distributions.
Stock Analysis: Fetches stock data and insights using the yahoo-finance2 library.
Data Scraping: Scrapes NSE India data for in-depth analysis of funds outside the top 50.
User Authentication: Google Sign-In for authentication.
Flexible Questionnaire: Collects responses via Google Forms (stored in MongoDB) or a one-time session mode (temporary JSON storage).

🛠 Tech Stack
Frontend: React (Vite) + Tailwind CSS
Backend: Node.js (Express)
Database: MongoDB Atlas
ML Model: Python (Deployed on Google Cloud Functions/AWS Lambda/VPS)
Hosting: Vercel (Frontend), Render/VPS (Backend)

📈 How It Works
User Authentication: Users sign in via Google.
Questionnaire Submission: Responses are either stored in MongoDB or temporarily saved in a JSON file.
Portfolio Recommendation: The AI model fetches stock data and suggests an investment strategy.
Chatbot Assistance: Users interact with the AI chatbot for insights on financial markets.
Data Scraping (if required): If a stock isn't in the top 50, the system scrapes NSE India for details.

💡 Business Model
Freemium: Free tier with basic advice, premium tier for advanced analytics and real-time alerts.
Affiliate Revenue: Earnings via brokerage partnerships.
Data Monetization (Optional): Aggregated insights for market research firms (privacy-compliant).
