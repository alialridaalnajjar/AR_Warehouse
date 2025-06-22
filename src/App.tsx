import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ProductsBase } from "./data/ProductsBase"; // Adjust the import path as necessary
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import type { ProductCardType } from "./types/productCardType";
function App() {
  const [cartItems, setCartItems] = useState<ProductCardType[]>([]);
  const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route
            path="/MainPage"
            element={<MainPage count={count} setCount={setCount} />}
          />
          <Route
            path="/ShopPage"
            element={
              <ShopPage
                ProductsBase={ProductsBase}
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route path="/AboutPage" element={<AboutPage count={count} />} />
          <Route
            path="/CartPage"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
