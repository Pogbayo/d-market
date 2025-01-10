// import { ReactNode } from "react";
import styles from "./reusablecomponent.module.css";
import { useCart } from "../../../lib/usecart";
import { recentlyFeaturedDataProp } from "../../../lib/useContext";
export type APIResponse = {
  category: string;
  description: string;
  id: number;
  images: string;
  price: number;
  rating: object;
  title: string;
};

export const ReusableComponent = ({ data }: { data: APIResponse[] }) => {
  const { addToRecentlyFeaturedArray } = useCart();
  const handleAddItem = (item: recentlyFeaturedDataProp) => {
    addToRecentlyFeaturedArray(item);
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
