import { useNavigate } from "react-router-dom";
import { useCart } from "../../lib/usecart";
import { APIResponse } from "../../lib/useContext";
import styles from "./amazing.module.css";

export const AmazingDeals = () => {
  const { fetchedData, handleAddItem } = useCart();
  const limitedData = fetchedData?.slice(10, 23);
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
  const parseImageUrl = (imageUrl: string) => {
    try {
      const parsed = JSON.parse(imageUrl);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed[0]; // return the first URL in the array
      }
      return imageUrl;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return imageUrl;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Amazing deals, updated daily</h2>
      <div className={styles.productWrapper}>
        {limitedData?.map((item) => {
          const slashedPrice = Number(item.price) * 2;
          const imageSrc = parseImageUrl(item.images[0]);

          return (
            <div
              key={item.id}
              className={styles.product}
              onClick={() => handleClick(item)}
            >
              <img src={imageSrc} alt="" className={styles.imagesrc} />
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
