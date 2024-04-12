import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { GuestLayout } from "../components/layouts/GuestLayout";
import { Home } from "../pages/home/Home";
import { Notifications } from "../pages/notification/Notification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      // {
      //   path: "/customer/single/:id",
      //   element: <CustomerView />,
      // },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
