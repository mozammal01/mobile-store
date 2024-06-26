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
        path: "/addProduct",
        element: <AddProduct></AddProduct>
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