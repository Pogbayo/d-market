import { Home } from "./components/Home/Home";
import { CartProvider } from "./lib/useContext";

export const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
};
