import { useNavigate } from "react-router-dom";
import { useCart } from "../../../lib/usecart";
import { APIResponse } from "../../../lib/useContext";
import styles from "./products.module.css";

export const Products = () => {
  const { fetchedData, handleAddItem } = useCart();
  const navigate = useNavigate();
  const limitedData = fetchedData?.slice(0, 5);
  const handleClick = (item: APIResponse) => {
    handleAddItem(item);
    setTimeout(() => {
      navigate("/viewProduct");
    }, 2000);
  };
  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.images[0] === "string"
            ? item.images[0]
            : "/fallback-image.jpg";

        return (
          <div
            onClick={() => handleClick(item)}
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
