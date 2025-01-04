import { useCart } from "../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(10, 40); // limiting data to show only products 10 to 20
  console.log(limitedData);
  console.log("Helloe", fetchedData?.[0].description);
  // const mappedDesc = limitedData?.map((item) => {
  //   return typeof item.description === "string"
  //     ? item.description.slice(0, 10)
  //     : "";
  // });
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
