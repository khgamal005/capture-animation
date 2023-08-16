import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import OurWork from "./pages/OurWork";
import Layout from "./Layout";
import MovieDetail from "./pages/MovieDetail";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children :[
        {index:true ,element:<App/>},
       { path:'work',element:<OurWork/>},
       { path:'work/:id',element:<MovieDetail/>},
       {path:"/contact",element:<ContactUs/>},
    ]
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);