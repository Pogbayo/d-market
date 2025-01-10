import { useCart } from "../../../lib/usecart";
import { recentlyFeaturedDataProp } from "../../../lib/useContext";
import styles from "./products.module.css";

export const Products = () => {
  const { addToRecentlyFeaturedArray } = useCart();
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(13, 19);
  const handleAddItem = (item: recentlyFeaturedDataProp) => {
    addToRecentlyFeaturedArray(item);
  };
  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.image === "string" ? item.image : "/fallback-image.jpg";

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
