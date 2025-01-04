import { useEffect, useState } from "react";
import { ReusableComponent } from "../../itemDiv/reusable/ReusableSquareComponent";
import { useCart } from "../../lib/usecart";
import styles from "./recentlyviewedtwo.module.css";

export const RecentlyViewedTwo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { fetchedData } = useCart();
  const slicedData = fetchedData?.slice(0, 4) || [];
  const lastDataImageUrl =
    fetchedData && fetchedData[19] ? fetchedData[19].image : null;

  useEffect(() => {
    if (fetchedData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <div className={styles.skeletonLoader}>
            <div className={styles.shimmer}></div>
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <div
            className={styles.divOne}
            style={{
              backgroundImage: `url(${lastDataImageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p style={{ color: "red" }}> {slicedData[4]?.price}</p>
          </div>
          <div className={styles.divTwo}>
            <ReusableComponent data={slicedData} />
          </div>
        </div>
      )}
    </div>
  );
};
