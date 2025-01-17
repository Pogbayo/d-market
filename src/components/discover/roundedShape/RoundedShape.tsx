import { useNavigate } from "react-router-dom";
import { useCart } from "../../../lib/usecart";
import { APIResponse } from "../../../lib/useContext";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const navigate = useNavigate();
  const { fetchedData, handleAddItem } = useCart();
  const limitedData = fetchedData?.slice(0, 4); // limiting data to show only products 10 to 20
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
            key={item.id}
            className={styles.product}
            style={{ color: "black" }}
            onClick={() => handleClick(item)}
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
