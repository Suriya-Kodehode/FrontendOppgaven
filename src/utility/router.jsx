import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { base_url as base } from "../../config.js";
import { PrivateRoute } from "./authRoute.jsx";

import App from "../App.jsx";
import Home from "../pages/homePage.jsx";
import Register from "../pages/registerPage.jsx";
import Login from "../pages/loginPage.jsx";
import NotFound from "../pages/notfound.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { 
            index: true,    
            element: <Navigate to="register" replace /> 
        },
        { 
            path: "register", 
            element: <Register /> 
        },
        { 
            path: "login",    
            element: <Login /> 
        },
        { 
            path: "home",     
            element: (
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            )
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ],
  {
    basename: base
  }
);

function BaseInjector ({ base }) {
    useEffect(() => {
        let baseTag = document.querySelector("base");
        if (!baseTag) {
            baseTag = document.createElement("base");
            document.head.appendChild(baseTag);
        }
        baseTag.setAttribute("href", base);
    }, [base]);
    return null;
}

const AppRouter = () => (
    <>
        <BaseInjector base={base} />
        <RouterProvider router={router} />
    </>
);

export default AppRouter;