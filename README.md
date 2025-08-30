## Overview

This project is a React-based user management and analytics dashboard developed as part of a task assigned by Zymr.  
It focuses on fetching, managing, and visualizing user data through charts and interactive UI components.

The project consists of two main modules:

1. **Dashboard with Graphs**
2. **List of Users with In-Memory Pagination**

## 🌐 Project Preview

![Preview](https://web-assignment27-git-main-rishikesh-pals-projects.vercel.app/)

## Features Implemented

- **User Management Dashboard:** Fetches users from API using Redux Toolkit, handles duplicates, and displays them in responsive tables.
- **Charts & Analytics:** Visualizes total users, signup trends, avatar distribution, and recent users using Recharts.
- **UI Components:** Responsive tables, horizontal user lists, and modal popups for detailed user information.
- **Pagination & Search:** In-memory pagination with sorting and search capabilities.
- **API Handling:** Prevents duplicate API calls, supports `.env` for secure API endpoints.

## Tech Stack & Dependencies

| Library / Tool   | Purpose / Usage                                       |
| ---------------- | ----------------------------------------------------- |
| React            | Core frontend library for building UI components.     |
| React DOM        | Handles rendering React components in the DOM.        |
| React Router DOM | Manages client-side routing between pages/components. |
| Redux Toolkit    | Simplifies state management and API data handling.    |
| React Redux      | Connects React components to the Redux store.         |
| Tailwind CSS     | Utility-first CSS framework for responsive styling.   |
| Recharts         | Library for building charts and data visualizations.  |
| Date-fns         | Handles date formatting and calculations.             |
| Dotenv           | Loads environment variables securely.                 |

## Project Structure

src/
┣ components/ # Reusable UI components (Table, Shimmer, Charts, Tiles)
┣ hooks/ # Custom hooks (useUserData)
┣ pages/ # App pages (Dashboard, UsersPage)
┣ utils/ # Redux slices, appStore
┣ App.jsx # Main app with routes
┗ main.jsx # App entry point

## Getting Started

```bash
# 1) Clone and enter the project
git clone <your-repo-url>
cd <your-project-folder>

# 2) Install dependencies
npm install

# 3) Create environment file
#    Replace the URL with your API endpoint
echo "VITE_USERS_API_URL=<your-user-api-endpoint>" > .env

# 4) Run the app
npm run dev
```
