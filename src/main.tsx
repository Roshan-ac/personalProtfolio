import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./About/About.tsx";
import { Navbar } from "./Components/Navbar";
import MovingLines from "./Components/MovingBgLine/MovingLines.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="bg-[#131313] z-0 relative overflow-hidden">
      <Navbar />
      <MovingLines />
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
