import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home1 from "../components/Home1/Home1";
import ChefItemLayout from "../ChefItemLayout/ChefItemLayout";
import AllItems from "../AllItems/AllItems";
import UserLayOut from "../components/UserLayout/UserLayOut";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
          element:<PrivateRoute><AllItems></AllItems></PrivateRoute>,
          loader: ({params}) => fetch(`https://bakulful-restaurant-server-9ir4nzp66-kh-mhb.vercel.app/chefs/${params.id}`)
        }
      ]
    },
    {
      path:'userLayout',
      element:<UserLayOut></UserLayOut>,
      children:[
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    }
  ]);

  export default router;