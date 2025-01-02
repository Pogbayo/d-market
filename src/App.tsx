import { Home } from "./components/Home/Home";
import { CartProvider } from "./lib/useContext"; // Import CartProvider from the correct path

export const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
};
