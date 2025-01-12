import { useCart } from "../../../lib/usecart";
import styles from "./products.module.css";

export const Products = () => {
  const { fetchedData, handleAddItem } = useCart();
  const limitedData = fetchedData?.slice(0, 13);

  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.images[0] === "string"
            ? item.images[0]
            : "/fallback-image.jpg";

        return (
          <div
            onClick={() => handleAddItem(item)}
            key={item.id}
            className={styles.product}
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <p>USD {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};
