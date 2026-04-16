# Smart Resume Analyzer

Production-level ATS Resume Analyzer built using Python, Flask, React.

## Features

- Resume vs Job Description Matching
- ATS Score Calculation
- Keyword Frequency Analysis
- Top Skills Extraction
- REST API Architecture
- React Frontend UI

## Tech Stack

Frontend:
- React
- Axios

Backend:
- Python
- Flask
- REST API

DSA Used:
- HashMap (Counter)
- String Matching
- Sorting
- Frequency Analysis

## Project Structure

backend/
controllers/
services/
routes/
models/

frontend/
React UI

## How to Run

Backend:
cd backend
python app.py

Frontend:
cd frontend
npm start

## API

POST /api/analyze

{
"resume": "text",
"job": "text"
}

## Future Improvements

JWT Auth
Database storage
PDF Upload
ML Scoring
Docker Deployment
