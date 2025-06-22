import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { ProductsBase } from "./data/ProductsBase"; // Adjust the import path as necessary
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import type { ProductCardType } from "./types/productCardType";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState<ProductCardType[]>([]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route
            path="/ShopPage"
            element={
              <ShopPage
                ProductsBase={ProductsBase}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route
            path="/CartPage"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
