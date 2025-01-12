import { useCart } from "../../../lib/usecart";
import styles from "./improvement.module.css";

export const HomeImprovement = () => {
  const { fetchedData } = useCart();
  const slicedData = fetchedData?.slice(5, 7);
  const limitedData = fetchedData?.slice(5, 9);
  return (
    <div className={styles.container}>
      <div className={styles.upperDiv}>
        <div className={styles.infoSection}>
          <div className={styles.title}>Editor's Pick</div>
          <h2 className={styles.subtitle}>Home Improvement</h2>
          <p className={styles.description}>
            Elevate your space with these simple installs and easy home projects
            for your next DIY weekend.
          </p>
          <button className={styles.shopButton}>Shop these unique finds</button>
        </div>
        <div className={styles.productSection}>
          {slicedData?.map((item) => (
            <div
              key={item.id}
              className={styles.productCard}
              style={{ backgroundImage: `url(${item.images})` }}
            >
              <div className={styles.priceTag}>USD {item.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.lowerDiv}>
        <div className={styles.roductSection}>
          {limitedData?.map((item) => (
            <div
              key={item.id}
              className={styles.roductCard}
              style={{ backgroundImage: `url(${item.images})` }}
            >
              <div className={styles.riceTag}>USD {item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
