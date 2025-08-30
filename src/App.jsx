import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";
import useUserData from "./hooks/useUserData";

const App = () => {
  useUserData();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
