import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ProductsBase } from "./data/ProductsBase";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import type { ProductCardType } from "./types/productCardType";
import ScrollToTop from "./customIconsComponents/ScrollToTop";
import AccountPage from "./pages/AccountPage";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cartItems, setCartItems] = useState<
    { product: ProductCardType; quantity: number }[]
  >([]);
  // Always derive count from cartItems
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route
            path="/MainPage"
            element={
              <MainPage
                count={count}
                cartItems={cartItems}
                setCartItems={setCartItems}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/ShopPage"
            element={
              <ShopPage
                ProductsBase={ProductsBase}
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/AboutPage"
            element={
              <AboutPage
                count={count}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/CartPage"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/AccountPage"
            element={<AccountPage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
