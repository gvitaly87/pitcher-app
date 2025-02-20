import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage.tsx";

import Coach from "./pages/Coach.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Roster from "./pages/Roster.tsx";
import Schedule from "./pages/Schedule.tsx";
import Training from "./pages/Training.tsx";

import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/coach",
    element: <Coach />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "roster",
        element: <Roster />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "training",
        element: <Training />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
