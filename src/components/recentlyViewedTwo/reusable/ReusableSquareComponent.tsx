import { ReactNode } from "react";
import styles from "./reusablecomponent.module.css";
export type APIResponse = {
  id?: number;
  name?: string;
  [key: string]: ReactNode;
};
export const ReusableComponent = ({ data }: { data: APIResponse[] }) => {
  return (
    <div className={styles.container}>
      {data?.map((item) => {
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
