import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/HomePage";
import ShipDetailPage from "../pages/ShipDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/starships/:ship",
    element: <ShipDetailPage />,
  },
]);

export default router;
