import { useNavigate } from "react-router-dom";
import { useCart } from "../../../lib/usecart";
import { APIResponse } from "../../../lib/useContext";
import styles from "./box.module.css";

interface FeaturedCategoriesProps {
  data: APIResponse[] | null;
}

export const FeaturedBox: React.FC<FeaturedCategoriesProps> = ({ data }) => {
  const { handleAddItem } = useCart();
  const limitedData = data?.slice(0, 13);
  const navigate = useNavigate();
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return `${words.slice(0, 3).join(" ")}...`;
    }
    return description;
  };
  const handleClick = (item: APIResponse) => {
    handleAddItem(item);
    setTimeout(() => {
      navigate("/viewProduct");
    }, 2000);
  };
  return (
    <div className={styles.container}>
      <h2>Featured Categories</h2>
      <div className={styles.productWrapper}>
        {limitedData?.map((item) => {
          const slashedPrice = Number(item.price) * 2;
          return (
            <div
              key={item.id}
              className={styles.product}
              onClick={() => handleClick(item)}
            >
              <img src={`${item.images}`} alt="" />
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
