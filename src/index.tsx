import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import { AboutLazy } from "@/pages/about/About.lazy";
import { ShopLazy } from "@/pages/shop/Shop.lazy";
import { Suspense } from "react";
const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/about',
        element: <Suspense fallback={'Loading...'}><AboutLazy/></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading...'}><ShopLazy/></Suspense>
      }
    ]
  },
]);

const container = createRoot(root);
container.render(   <RouterProvider router={router} />);
