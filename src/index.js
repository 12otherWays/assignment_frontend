import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Layout from "./components/homepage/Layout";
import LoginPage from "./components/homepage/LoginPage";
import SignUpPage from "./components/homepage/SignUpPage";
import FormLayout from "./components/form/FormLayout";
import UserName from "./components/form/UserName";
import FirstPage from "./components/form/FirstPage";
import SecondPage from "./components/form/SecondPage";
import UserContextProvider from "./context/UserContextProvider";
import LastPage from "./components/form/LastPage";
import ResponsePage from "./components/homepage/ResponsePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/response",
        element: <ResponsePage />,
      },
    ],
  },
  {
    path: "/form",
    element: <FormLayout />,
    children: [
      {
        path: "",
        element: <UserName />,
      },
      {
        path: "first-form",
        element: <FirstPage />,
      },
      {
        path: "second-form",
        element: <SecondPage />,
      },
      {
        path: "last",
        element: <LastPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
