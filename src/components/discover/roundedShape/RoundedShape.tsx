import { useCart } from "../../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(9, 13); // limiting data to show only products 10 to 20

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
