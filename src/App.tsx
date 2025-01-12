import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Home } from "./components/Home/Home";
import { CartProvider } from "./lib/useContext";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Home />
        </CartProvider>
      </Router>
    </div>
  );
};
