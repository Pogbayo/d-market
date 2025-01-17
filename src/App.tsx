import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./lib/useContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { Home } from "./components/Home/Home";
import { Viewedproduct } from "./components/viewProducts/ViewProduct";
import { CartList } from "./components/cartList/CartList";
import AdminPanel from "./components/Admin/AdminPanel";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/viewProduct" element={<Viewedproduct />} />
              <Route path="/cartlist" element={<CartList />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </CartProvider>
  );
};
