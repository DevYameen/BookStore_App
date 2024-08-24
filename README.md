# BookStore_App

**BookStore_App** is a full-stack MERN (MongoDB, Express, React, Node.js) project for managing and showcasing books in an online bookstore. The app features both frontend and backend functionalities, allowing users to browse books, filter by category, and add books to their collection. The backend is powered by Node.js with MongoDB, while the frontend is built using React with Tailwind CSS.

## Features

### Frontend
- **Home Page**: A visually appealing landing page showcasing books and categories with advanced Tailwind CSS styling for a responsive design.
- **About Page**: A responsive and attractive About page built using Tailwind CSS to provide information about the store.
- **Books Display**: Displays books fetched from an API with the ability to filter by category (e.g., Free books).
- **Carousel Display**: `react-slick` is used for a smooth carousel view of featured books.
- **Responsive Design**: The entire application is fully responsive across various devices and screen sizes.

### Backend
- **Node.js & Express**: The backend is built using Express.js to handle API requests.
- **MongoDB**: MongoDB is used to store information about books, categories, and user details.
  
#### API Endpoints:
- Fetch all books
- Filter books by category (e.g., Free books)
- Add new books to the database

### Additional Functionalities
- **User Authentication**: The app supports user login and registration (currently in development).
- **Contact Page**: A `Contact Us` page styled using Tailwind CSS.
- **Free Book Carousel**: Fetches and displays free books in a rotating carousel.

## Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### Backend Setup

1. Clone the repository:

   git clone https://github.com/DevYameen/BookStore_App

   cd bookStoreApp

# Install dependencies:

cd backend

npm install

# Create a .env file in the backend folder and add the following:

PORT=4001
MONGODB_URI=mongodb://localhost:27017/bookstoredb

# Start the backend server:

npm run dev

# Frontend Setup:

# Navigate to the frontend folder:

cd frontend

# Install frontend dependencies:

npm install

# Start the frontend development server (Vite):

npm run dev

# Open your browser and navigate to:

http://localhost:3000

# Tech Stack

# Frontend:
- React.js
- Tailwind CSS
- react-slick for carousel
- Vite for development server

# Backend:
- Node.js
- Express.js
- MongoDB

# API:
- Custom endpoints for book fetching and management

Folder Structure-

```bash bookStoreApp/ │ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── .env │ └── server.js │ ├── frontend/ │ ├── src/ │ ├── components/ │ ├── pages/ │ └── App.jsx │ └── README.md ```

Contributing
If you'd like to contribute to this project, feel free to fork the repository and create a pull request.

   
