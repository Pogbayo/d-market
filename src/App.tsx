import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./lib/useContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { Home } from "./components/Home/Home";
import { Viewedproduct } from "./components/viewProducts/ViewProduct";
import { CartList } from "./components/cartList/CartList";
import AdminPanel from "./components/Admin/AdminPanel";
import { Layout } from "./components/layout/Layout";
import { SignUp } from "./components/Auth/sign-up/SignUp";
import { SignIn } from "./components/Auth/sign-in/SignIn";

export const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="/viewProduct" element={<Viewedproduct />} />
              <Route path="/cartlist" element={<CartList />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </CartProvider>
  );
};
