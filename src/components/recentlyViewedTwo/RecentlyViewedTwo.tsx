import { ReusableComponent } from "./reusable/ReusableSquareComponent";
import { useCart } from "../../lib/usecart";
import styles from "./recentlyviewedtwo.module.css";
import { useState, useEffect } from "react";
import { APIResponse } from "../../lib/useContext";
import { useNavigate } from "react-router-dom";

export const RecentlyViewedTwo = () => {
  const { fetchedData, recentlyFeaturedData, handleAddItem } = useCart();
  const navigate = useNavigate();

  const slicedData = fetchedData?.slice(1, 5) || [];
  const lastDataImageUrl =
    fetchedData && fetchedData[1] ? fetchedData[1].images[0] : null;
  const [isLoading, setIsLoading] = useState(true);
  // const handleItemClick = (item: APIResponse) => {
  //   openModal(item);
  //   handleAddItem(item);
  // };

  const handleClick = (item: APIResponse) => {
    handleAddItem(item);
    setTimeout(() => {
      navigate("/viewProduct");
    }, 2000);
  };

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
                      onClick={() => handleClick(item)}
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
