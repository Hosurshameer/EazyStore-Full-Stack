import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { productsLoader } from "./components/Home.jsx";
import { contactAction } from "./components/Contact.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import ProductDetail from "./components/ProductDetail.jsx";
import { CartContext } from "./store/cart-context.jsx";
import "react-toastify/dist/ReactToastify.css";

const routeDefinations = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinations);

const initialContext = {
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  totalQuantity: 0,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext.Provider value={initialContext}>
      <RouterProvider router={appRouter} />
    </CartContext.Provider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "drak" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>
);
