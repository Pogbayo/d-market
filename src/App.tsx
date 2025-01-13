import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { CartProvider } from "./lib/useContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <CartProvider>
          <Home />
        </CartProvider>
      </Router>
    </div>
  );
};
