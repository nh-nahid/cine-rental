# Cine Rental

A simple React application to browse movies, add them to a cart, and toggle dark mode using Tailwind CSS. Includes toast notifications for cart actions.

## Features:
- Browse a list of movies with details (title, genre, rating, price).
- Add movies to a shopping cart.
- Remove individual items from the cart.
- Dark mode toggle using Tailwind CSS (dark: variant).
- Toast notifications when movies are added to the cart.
- Responsive design.

##  Tech Stack

- React (functional components, hooks, context API)
- Tailwind CSS v4
- React Toastify for notifications

## Project Live URL:
<a href="https://cine-rental-lyart.vercel.app/">Click here</a> to explore the project.

## Installation

### 1 Clone the repository:
git clone git@github.com:nh-nahid/cine-rental.git </br> 
cd cine-rental

### 2 Install dependencies:
npm install

### 3 Start the development server:
npm run dev </br>
Open http://localhost:5173/ to view the app.

## Usage

- Click on a movie to view details.
- Click Add to Cart to add a movie.
- Click the cart icon to view cart items.

# Folder Structure

src/ </br>
├─ assets/ # Images and icons </br>
├─ components/ # Reusable UI components </br>
├─ cine/ # Movie-related components </br>
├─ contexts/ # React Contexts (MovieContext, ThemeContext) </br>
├─ reducers/ # Cart reducer </br>
├─ utils/ # Utility functions (e.g., getImgUrl) </br>
└─ App.js # Main app component

## License
This project is restricted. All credit goes to Learn With Sumit (LWS). Reactive Accelator.