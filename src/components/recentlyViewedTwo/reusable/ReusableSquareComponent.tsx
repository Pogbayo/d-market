// import { ReactNode } from "react";
import styles from "./reusablecomponent.module.css";
import { useCart } from "../../../lib/usecart";
import { APIResponse } from "../../../lib/useContext";
import { useNavigate } from "react-router-dom";

export const ReusableComponent = ({ data }: { data: APIResponse[] }) => {
  const { handleAddItem } = useCart();
  const navigate = useNavigate();

  const handleClick = (item: APIResponse) => {
    handleAddItem(item);
    setTimeout(() => {
      navigate("/viewProduct");
    }, 2000);
  };
  return (
    <div className={styles.container}>
      {data?.map((item) => {
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
