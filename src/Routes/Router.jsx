import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layout/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import AllProduct from "../pages/AllProduct/AllProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allProduct",
        element: <AllProduct></AllProduct>,
        loader: () => fetch('http://localhost:4000/mobiles')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:4000/mobiles/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;