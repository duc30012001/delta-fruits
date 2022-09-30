import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Import pages
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Introduce from "./pages/Introduce";
import NewDetail from "./pages/NewDetail";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

// Import Fake Datas
import products from "./helper/products";
import { setProducts } from "./redux/productsSlice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/products/:id",
        element: <ProductDetail />,
    },
    {
        path: "/news",
        element: <News />,
    },
    {
        path: "/news/:id",
        element: <NewDetail />,
    },
    {
        path: "/introduce",
        element: <Introduce />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
]);

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts(products));
    });

    // console.log(useSelector((state) => state.products.value));

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
