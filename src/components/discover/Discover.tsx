import { RoundedShape } from "./roundedShape/RoundedShape";
import styles from "./Discover.module.css";
import { useState, useEffect } from "react";
import { useCart } from "../../lib/usecart";

export const Discover = () => {
  const { fetchedData } = useCart();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
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
          <h2>Discover gifts for every occasion</h2>
          <div className={styles.roundedShapeWrapper}>
            <RoundedShape />
          </div>
        </>
      )}
    </div>
  );
};
