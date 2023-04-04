import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blogs from "./components/BLogs/Blogs";
import Friends from "./components/Friends/Friends";
import FriendDetails from "./components/FriendDetails/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Blogs />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendID",
        element: <FriendDetails />,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendID}`
          ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
