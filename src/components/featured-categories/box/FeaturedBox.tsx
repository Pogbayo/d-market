import { APIResponse } from "../../../lib/useContext";
import styles from "./box.module.css";

interface FeaturedCategoriesProps {
  data: APIResponse[] | null;
}

export const FeaturedBox: React.FC<FeaturedCategoriesProps> = ({ data }) => {
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return `${words.slice(0, 3).join(" ")}...`;
    }
    return description;
  };
  return (
    <div className={styles.container}>
      <h2>Featured Categories</h2>
      <div className={styles.productWrapper}>
        {data?.map((item) => {
          const slashedPrice = Number(item.price) * 2;
          return (
            <div key={item.id} className={styles.product}>
              <img src={`${item.image}`} alt="" />
              <p className={styles.desc}>
                {typeof item.description === "string"
                  ? truncateDescription(item.description)
                  : ""}
              </p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>$ USD {item.price}</p>
                <small className={styles.slashedPrice}>
                  <p style={{ textDecoration: "line-through" }}>
                    USD{slashedPrice.toFixed(2)}
                  </p>
                  <p>(65% off)</p>
                </small>
                <p className={styles.rating}>
                  5.0 ★ {`$${(slashedPrice / 1.3).toFixed(2)}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
