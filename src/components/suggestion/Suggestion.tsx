import { useCart } from "../../lib/usecart";
import styles from "./suggestion.module.css";
import { useState, useEffect } from "react";

export const Suggestion = () => {
  const { fetchedData } = useCart();
  const limitedData = fetchedData?.slice(10, 23);

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 3) {
      return `${words.slice(0, 3).join(" ")}...`;
    }
    return description;
  };

  const parseImageUrl = (imageUrl: string) => {
    try {
      const parsed = JSON.parse(imageUrl);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed[0]; // return the first URL in the array
      }
      return imageUrl;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return imageUrl;
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setIsLoading(false);
    }
  }, [fetchedData]);

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
          <h2>Suggested for you</h2>
          <div className={styles.productWrapper}>
            {limitedData?.map((item) => {
              const slashedPrice = Number(item.price) * 2;
              const imageSrc = parseImageUrl(item.images[0]);

              return (
                <div key={item.id} className={styles.product}>
                  <img src={imageSrc} alt="" className={styles.imagesrc} />
                  <p className={styles.desc}>
                    {typeof item.category === "string"
                      ? truncateDescription(item.description)
                      : ""}
                  </p>
                  <div className={styles.priceContainer}>
                    <p className={styles.price}>$ USD {item.price}</p>
                    <small className={styles.slashedPrice}>
                      <p style={{ textDecoration: "line-through" }}>
                        USD{slashedPrice.toFixed(2)}
                      </p>
                      <p>(65% off)</p>
                    </small>
                    <p className={styles.rating}>
                      5.0 ★ {`$${(slashedPrice / 1.3).toFixed(2)}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
