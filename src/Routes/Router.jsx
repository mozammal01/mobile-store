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
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductCard from "../pages/ProductCard/ProductCard";
import AllProduct from "../pages/AllProduct/AllProduct";


// https://mobile-store-server-sigma.vercel.app/

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
        path: "/products",
        element: <AllProduct></AllProduct>
      },
      {
        path: "/allProducts",
        element: <ProductCard></ProductCard>,
        loader: () => fetch('https://mobile-store-server-sigma.vercel.app/mobiles')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://mobile-store-server-sigma.vercel.app/mobiles/${params.id}`)
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