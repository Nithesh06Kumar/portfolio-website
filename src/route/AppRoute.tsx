import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Error from "../pages/ErrorPage/Error";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },

      {
        path: "/resume",
        element: <Resume />,
      },

      {
        path: "/portfolio",
        element: <Portfolio />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
