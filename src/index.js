import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Templates/Layout";
import reportWebVitals from "./reportWebVitals";
import CommunityShowcase from "./Pages/CommunityShowcase";
import Playground from "./Pages/Playground";

import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Wnodp93-sFlTTpglgsInItLHwH0JGJw",
  authDomain: "mobius-cf9b2.firebaseapp.com",
  projectId: "mobius-cf9b2",
  storageBucket: "mobius-cf9b2.appspot.com",
  messagingSenderId: "573994344375",
  appId: "1:573994344375:web:d3e9f24246c95ee4c69232",
  measurementId: "G-39F5JC7PLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
