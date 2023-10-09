import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home1 from "../components/Home1/Home1";
import ChefItemLayout from "../ChefItemLayout/ChefItemLayout";
import AllItems from "../AllItems/AllItems";

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
    {
      path:'/chefItem',
      element:<ChefItemLayout></ChefItemLayout>,
      children:[
        {
          path:':id',
          element:<AllItems></AllItems>,
          loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    }
  ]);

  export default router;