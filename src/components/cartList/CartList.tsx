import { useCart } from "../../lib/usecart";
import styles from "./cartlist.module.css";
import { FaOpencart } from "react-icons/fa";

export const CartList = () => {
  const { items, removeItemFromCart } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Shopping Cart</h1>
      {items.length > 0 ? (
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartCard}>
              <img
                src={item.images[0]}
                alt={item.title}
                className={styles.cartImage}
              />
              <div className={styles.cartContent}>
                <h3 className={styles.cartItemTitle}>{item.title}</h3>
                <p className={styles.cartItemPrice}>
                  USD {item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className={styles.cartButton}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className={styles.emptyCart}>
            Your cart is empty. Start shopping!
          </p>
          <div>
            <FaOpencart size={90} color="black" />
          </div>
        </>
      )}
    </div>
  );
};
