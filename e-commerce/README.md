# Product Ecommerce App

- A Product E-commerce React application featuring client-side routing, product listings, and shopping cart functionality. The app includes a paginated product catalog, individual product detail pages, a global cart (managed with Redux), and forms for user contact and registration. It also supports multiple languages through React’s Context API.

## Features

Routing: React Router for multi-page navigation (home, products, product details, contact, register)

Product Listing: Paginated list of products with name, price, and an “In Stock” badge

Product Details: Dynamic routes (e.g. /product/:id) for full product information

Shopping Cart: Add/remove items in cart managed with Redux global state

Stock Badge: Displays availability status on product cards/pages

Contact Form: Form with validation (email regex and React Hook Form/Formik for rules)

Register Form: User registration form with field validation

Language Switcher: Context API-based language selector for multi-language support (e.g. English/Spanish)

Responsive Design: UI components styled with Bootstrap for mobile-first design

## Technologies Used

React (with Hooks)

React Router (for routing)

Redux (for shopping cart state)

React Context API (for internationalization)

React Hook Form or Formik (for form handling/validation)

Bootstrap (for responsive layout and components)

JavaScript (ES6+), HTML/CSS

Fetch API or Axios (for product data)

Environment variables (e.g. .env for API endpoints)

Node.js and npm

Setup Instructions

Clone the repository: git clone https://github.com/username/ecommerce-app.git

Navigate into the project directory: cd ecommerce-app

Install dependencies: npm install

(Optional) Create a .env file to set environment variables (e.g., REACT_APP_API_URL)

Start the development server: npm start

Open your browser at http://localhost:3000

## Usage

After launching the app, navigate to the Products page to browse items.

Use pagination controls to view different pages of products.

Click on any product to go to its detail page (URL like /product/123).

On a product page, select quantity and click Add to Cart to save items in the cart (Redux state).

Visit the Cart page (if available) to review or remove items.

Go to Contact or Register pages to fill out forms; the forms include validation and will prompt for any missing or invalid fields.

Use the language switcher (e.g., a dropdown or toggle) to change the app’s text between supported languages.# React + Vite


