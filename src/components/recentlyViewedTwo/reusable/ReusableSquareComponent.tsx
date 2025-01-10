import { ReactNode } from "react";
import styles from "./reusablecomponent.module.css";
import { useCart } from "../../../lib/usecart";
export type APIResponse = {
  id?: number;
  name?: string;
  [key: string]: ReactNode;
};
export const ReusableComponent = ({ data }: { data: APIResponse[] }) => {
  const { addToRecentlyFeaturedArray } = useCart();
  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const imageSrc =
          typeof item.image === "string" ? item.image : "/fallback-image.jpg";

        return (
          <div
            onClick={() => addToRecentlyFeaturedArray(item)}
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
