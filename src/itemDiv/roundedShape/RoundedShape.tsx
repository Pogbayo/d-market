import { useState, useEffect } from "react";
import { useCart } from "../../lib/usecart";
import styles from "./roundedShape.module.css";

export const RoundedShape = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(10, 40); // limiting data to show only products 10 to 20
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetchedData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <div className={styles.skeletonLoader}>
            <div className={styles.shimmer}></div>
          </div>
        </>
      ) : (
        <>
          {limitedData?.map((item) => {
            const imageSrc =
              typeof item.image === "string"
                ? item.image
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
                  {typeof item.title === "string"
                    ? item.title?.slice(0, 5)
                    : ""}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
