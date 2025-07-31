# Multi-Theme React App

A responsive and accessible React application that supports dynamic theme switching across the entire app (light/dark/colored), includes multiple pages (Home, About, Contact), integrates with an external API, and uses best practices for performance and basic security.

---

## Features

- Theme switcher with **persistent selection** (stored in `localStorage`)
- Product list fetched from [FakeStore API](https://fakestoreapi.com/)
- Built with **Tailwind CSS**
- React Router for routing between **Home**, **About**, and **Contact**
- Supports three distinct themes
- Displays **loading spinner** during data fetch
- Responsive layout

---

## Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router**
- **Context API**
- **Axios**
- **Lucide Icons**

---

## Setup Instructions

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/sarkhailstorm/multi-theme-switcher.git
cd multi-theme-app
```
### 2. Install Dependencies
Make sure you have Node.js (v16+) and npm installed.
```bash
npm install
```
### 3. Start the Development Server
```bash
npm run dev
```
Then, open your browser and visit:
```bash
http://localhost:5173
```

### Directory Structure
```bash
src/
│
├── components/        # Reusable UI components (Navbar, ThemeToggle, etc.)
├── context/           # ThemeContext (for theme switching logic)
├── pages/             # Page components (Home, About, Contact)
├── App.jsx            # Main App component with routes
├── main.jsx           # App entry point
└── index.css          # Tailwind CSS styles


