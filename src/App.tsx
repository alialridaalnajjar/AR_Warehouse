import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { ProductsBase } from "./data/ProductsBase"; // Adjust the import path as necessary
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/ShopPage" element={<ShopPage ProductsBase={ProductsBase}  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
