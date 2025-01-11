import { ReusableComponent } from "./reusable/ReusableSquareComponent";
import { useCart } from "../../lib/usecart";
import styles from "./recentlyviewedtwo.module.css";
import { useState, useEffect } from "react";

export const RecentlyViewedTwo = () => {
  const { fetchedData, recentlyFeaturedData, openModal } = useCart();
  const slicedData = fetchedData?.slice(1, 5) || [];
  const lastDataImageUrl =
    fetchedData && fetchedData[19] ? fetchedData[1].images[1] : null;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [fetchedData]);

  return (
    <div>
      <section className={styles.sec}>
        {isLoading ? (
          <>
            <div className={styles.skeletonLoader}>
              <div className={styles.shimmer}></div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.threeDivsContainer}>
              <p>Because you recently viewed</p>
              <div>
                {recentlyFeaturedData.map((item) => {
                  return (
                    <img
                      className={
                        recentlyFeaturedData ? styles.img : styles.shimmer
                      }
                      onClick={() => openModal(item)}
                      src={item.images[0]}
                      alt=""
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>

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
          </>
        )}
      </section>
    </div>
  );
};
