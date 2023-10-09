import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home1 from "../components/Home1/Home1";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home1></Home1>
        }
      ]
    },
  ]);

  export default router;