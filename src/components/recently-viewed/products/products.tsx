import { useCart } from "../../../lib/usecart";
import styles from "./products.module.css";

export const Products = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(13, 19);

  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.image === "string" ? item.image : "/fallback-image.jpg";

        return (
          <div
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
