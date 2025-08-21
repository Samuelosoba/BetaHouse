import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RootLayout from "../layout/RootLayout";
import Properties from "../pages/Properties";

export default function Approute() {
  const route = [
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "properties",
          element: <Properties />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(route);
  return <RouterProvider router={router} />;
}
