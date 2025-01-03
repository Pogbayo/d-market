import { useCart } from "../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(10, 20);

  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        return (
          <div key={item.id} className={styles.product}>
            <div>
              <img src="" alt="" />
            </div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};
