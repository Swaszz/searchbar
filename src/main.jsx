

import { createRoot } from 'react-dom/client'
import ProductDetails from './ProductDetails';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Roots from "./routes/roots";
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

