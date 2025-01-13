import { useCart } from "../../lib/usecart";
import styles from "./cartlist.module.css";
export const CartList = () => {
  const { items } = useCart();
  console.log("CartList items:", items);

  return (
    <div className={styles.container}>
      <div>cartlist</div>
      <div>
        {items?.map((item) => (
          <div key={item.id} className={styles.box}>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
