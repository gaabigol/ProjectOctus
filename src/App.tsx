import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { NewProduct } from "./pages/dashboard/new";
import { ProductsDetais } from "./pages/products";
import { Layout } from "./components/layout"
import { UpdateProduct } from "./pages/dashboard/productsupdate";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path:"/product",
        element: <ProductsDetais/>
      }, 
      {
        path: "/new",
        element: <NewProduct/>
      },
      {
        path:"/update/:productId",
        element: <UpdateProduct/>
      }
    ]
  },
  
])

