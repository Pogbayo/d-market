import { useCart } from "../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(10, 40); // limiting data to show only products 10 to 20
  console.log(limitedData);

  return (
    <div className={styles.container}>
      {limitedData?.map((item) => {
        const imageSrc =
          typeof item.image === "string" ? item.image : "/fallback-image.jpg";

        return (
          <div
            key={item.id}
            className={styles.product}
            style={{ color: "black" }}
          >
            <div
              className={styles.roundDiv}
              style={{ backgroundImage: `url(${imageSrc})` }}
            >
              hg
            </div>
            <p>{item.category}</p>
          </div>
        );
      })}
    </div>
  );
};
