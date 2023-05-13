import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Templates/Layout";
import reportWebVitals from "./reportWebVitals";
import CommunityShowcase from "./Pages/CommunityShowcase";
import Playground from "./Pages/Playground";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/community-showcase",
    element: (
      <Layout>
        <CommunityShowcase />
      </Layout>
    ),
  },
  {
    path: "/playground",
    element: (
      <Layout>
        <Playground />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
