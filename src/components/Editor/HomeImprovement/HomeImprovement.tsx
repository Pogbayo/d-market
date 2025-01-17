import { useNavigate } from "react-router-dom";
import { useCart } from "../../../lib/usecart";
import { APIResponse } from "../../../lib/useContext";
import styles from "./improvement.module.css";

export const HomeImprovement = () => {
  const { fetchedData, handleAddItem } = useCart();
  const slicedData = fetchedData?.slice(5, 7);
  const limitedData = fetchedData?.slice(5, 9);
  const navigate = useNavigate();

  const handleClick = (item: APIResponse) => {
    handleAddItem(item);
    setTimeout(() => {
      navigate("/viewProduct");
    }, 2000);
  };

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
              onClick={() => handleClick(item)}
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
              onClick={() => handleClick(item)}
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
