# **The Pizza Haven**

## **Project Overview**
**Pizza Haven** is an interactive pizza delivery web application built with **React** and **Redux Toolkit**. Users can browse the menu, manage their shopping cart, place orders, and manage profiles. The app integrates **REST APIs** to fetch the menu, manage orders, and handle user data, providing a dynamic and real-time experience.

## **Key Features**
- **Menu Display**: Users can view and select pizzas and other items. The menu is fetched from the backend API using the `getMenu` function.
- **Cart Management**: 
  - Add, remove, and adjust quantities of items in the cart.
  - The cart dynamically updates the total price, and items can be removed when their quantity is zero.
  - Users can clear the entire cart with a single action.
- **Order Management**: 
  - Users can create and update orders via the backend API (`createOrder`, `updateOrder`).
  - View and modify specific orders with dynamic routes like `/order/:orderId`.
- **User Profile & Address**: 
  - Users can manage their profiles and verify/update their address via **geolocation**.
  - The user's address is fetched dynamically using the **`getAddress` function** from the **API**.
- **Responsive Design**: Fully responsive UI for mobile and desktop.
- **Navigation**: 
  - **React Router** handles routing between pages like **Home**, **Menu**, **Cart**, and **Order**.
  - Dynamic routes enable personalized views for each order (`/order/:orderId`).
- **Error Handling**: Clear error messages are provided for navigation and API-related errors.

## **Technologies Used**
- **React**: JavaScript library for building dynamic user interfaces.
- **Redux Toolkit**: State management, including cart functionality (add, remove, modify items).
- **React-Redux**: Connecting React components with Redux store for global state management.
- **React Router**: For page routing and dynamic views.
- **Tailwind CSS**: A utility-first CSS framework for fast and responsive styling.
- **Vite**: Development build tool for optimized performance and fast reloading.
- **ESLint & Prettier**: Code quality tools for linting and formatting.
- **Geolocation & Reverse Geocoding**: 
  - **`getAddress`** fetches the user's address based on their geolocation.
- **API Integration**: 
  - **Menu**: Fetches the pizza menu from the backend.
  - **Orders**: Create, update, and fetch orders via the API.

## **Installation & Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-pizza-haven.git
2. Navigate into the project directory::
   ```bash
   cd the-pizza-haven
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run dev



