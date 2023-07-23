import { createBrowserRouter} from "react-router-dom";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { NewProduct } from "./pages/dashboard/new";
import { ProductsDetais } from "./pages/products";
import { Layout } from "./components/layout"
import { UpdateProduct } from "./pages/dashboard/productsupdate";
import PrivateRoute  from "./util/security";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    element: (
      <PrivateRoute>
        <Layout/>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path:"/product/:productId",
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

