# Fruit.ai Application

## Overview

This project is a Full Stack web application. The application includes various pages and functionalities, such as a login page, homepage, chatbot page, translator page, FAQ page, and an about page. The design is mobile-friendly and includes CRUD functionality for the FAQs page.

## Deployed Link - https://fruit-ai-flax.vercel.app/
## "Please allow 40-70 seconds for the FAQ page to load. Our backend is deployed on Render, which may cause some delays."

## Features

- **Login Page**: Secure login for users.
- **Homepage**: Main landing page with navigation to other pages.
- **Chatbot Page**: Interactive chatbot for fruit suggestions and details.
- **Translator Page**: Translate text to different languages (optional feature).
- **FAQ Page**: Manage frequently asked questions with CRUD operations.
- **About Page**: Information about the application and the team.

## Project Structure

The project is divided into two main parts:

### Frontend

- **Framework**: React.js
- **Components**:
  - `LoginPage.js`
  - `HomePage.js`
  - `ChatbotPage.js`
  - `TranslatorPage.js`
  - `FAQPage.js`
  - `AboutPage.js`
- **Styles**: CSS or styled-components for styling.
- **Routing**: React Router for navigation between pages.

### Backend

- **API Endpoints**:
  - `/api/login`: Handle user login.
  - `/api/faqs`: CRUD operations for FAQs.
  - Additional endpoints for other functionalities (if applicable).

## Setup and Run Instructions

### Prerequisites

- Node.js and npm installed on your local machine.
- A code editor such as Visual Studio Code.

### Frontend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Chiragrana17/fruit-app.git
   ```

2. **Navigate to the frontend directory**:

   ```bash
   cd fruitapp/frontend
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd fruit-app/backend
   ```

2. **Install dependencies**:

   ```bash
   npm init -y
   ```

3. **Start the server**:

   ```bash
   node index.js
   ```

   The server will be running on `http://localhost:5000` (or the port specified in your `index.js` file).
