import { useCart } from "../../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData, handleAddItem } = useCart();
  const limitedData = fetchedData?.slice(0, 4); // limiting data to show only products 10 to 20

  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.images[0] === "string"
            ? item.images[0]
            : "/fallback-image.jpg";

        return (
          <div
            key={item.id}
            className={styles.product}
            style={{ color: "black" }}
            onClick={() => handleAddItem(item)}
          >
            <div
              className={styles.roundDiv}
              style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
            <p>
              {typeof item.title === "string" ? item.title?.slice(0, 5) : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};
