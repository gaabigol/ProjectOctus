import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { NewProduct } from "./pages/dashboard/new";
import { ProductsDetais } from "./pages/products";
import { Home } from "./pages/home";

import { Layout } from "./components/layout";


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
        element: <Home/>
      },
      {
        path:"/product/:id",
        element: <ProductsDetais/>
      }, 
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/dashboard/new",
        element: <NewProduct/>
      }
    ]
  },
  
])

