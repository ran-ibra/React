import { useContext, useEffect } from "react";
import { Lang } from "./context/lang.jsx";
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { lazy, Suspense } from "react";
import AppNavbar from "./components/header.jsx";

const ContactUs = lazy(() => import('./components/contactUs.jsx'));
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const CartPage = lazy(() => import('./components/cartPage.jsx'));
const Register = lazy(() => import('./components/registerPage.jsx'));

function App() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const { lang } = useContext(Lang);

  useEffect(() => {
    if (lang === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [lang]);
  return (
    <>
      <AppNavbar cartCount={cartCount} />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      </Suspense>

    </>
  )
}

export default App


